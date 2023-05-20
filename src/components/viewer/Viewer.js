import React, { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import storage from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import * as pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Viewer = () => {

    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const canvasRef = useRef();
    const numPages = pdfDoc ? pdfDoc._pdfInfo.numPages : 0;

    const renderPage = useCallback(async ({ pdfDoc, pageNum, scale }) => {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        }
        // issue: what happens for the first page?
        page.render(renderContext);
    }, []
    )

    useEffect(() => {
        async function loadPdf() {
            const gsReference = ref(storage, 'gs://one-read-72fb0.appspot.com/test_files/polymer-lgv2.pdf');
            let url = null;
            await getDownloadURL(gsReference).then((url_) => {
                url = url_;
            });
            const loadedPdf = await pdfjs.getDocument(url).promise;

            setPdfDoc(loadedPdf);
            renderPage({ pdfDoc: loadedPdf, pageNum, scale: 1 })
        }

        loadPdf();
    }, [renderPage])

    const increasePageNum = () => {
        if (pageNum < numPages) {
            renderPage({ pdfDoc, pageNum: pageNum + 1, scale: 1 });
            setPageNum(pageNum + 1);
        }
    }
    const decreasePageNum = () => {
        if (pageNum > 1) {
            renderPage({ pdfDoc, pageNum: pageNum - 1, scale: 1 });
            setPageNum(pageNum - 1);
        }
    }


    const id = useParams().id;
    return (
        <div>
            <div>
                <button onClick={decreasePageNum}>
                    <FontAwesomeIcon icon={faChevronLeft} className="ml-2" />
                </button>
                <span>{pageNum}</span>
                <button onClick={increasePageNum}>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </button>
            </div>
            <div className="canvas-container">
                <div>
                    <canvas ref={canvasRef} />
                </div>
            </div>
        </div>
    )
}

export default Viewer;  