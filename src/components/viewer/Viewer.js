import React, { useEffect, useRef, useState, useCallback } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import * as pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import "./Viewer.css"

GlobalWorkerOptions.workerSrc = pdfjsWorker;
let renderTask = null
console.log(typeof TextLayerBuilder)

const Viewer = () => {

    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const canvasRef = useRef();
    const textLayerRef = useRef();
    const numPages = pdfDoc ? pdfDoc._pdfInfo.numPages : 0;

    const renderPage = useCallback(async ({ pdfDoc, pageNum, scale }) => {
        if (renderTask) {
            await renderTask.cancel();
        }
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: scale });
        var canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const textLayer = textLayerRef.current;
        textLayer.innerHTML = "";
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        }
        // issue: what happens for the first page?
        renderTask = page.render(renderContext);

        const textContent = await page.getTextContent();

        let textRender = pdfjs.renderTextLayer({
            textContent: textContent,
            container: textLayer,
            viewport: page.getViewport({ scale: scale }),
            textDivs: []
        });
        console.log(textRender)
        textLayer.style = `height: ${viewport.height}px; width: ${viewport.width}px; --scale-factor: ${scale};`;

    }, []
    )


    useEffect(() => {
        async function loadPdf() {
            if (pdfDoc === null) {
                const gsReference = ref(storage, 'gs://one-read-72fb0.appspot.com/test_files/polymer-lgv2.pdf');
                let url = null;
                await getDownloadURL(gsReference).then((url_) => {
                    url = url_;
                });
                const loadedPdf = await pdfjs.getDocument(url).promise;
                setPdfDoc(loadedPdf);
            }
            renderPage({ pdfDoc: pdfDoc, pageNum, scale: 1 })
        }

        loadPdf();
    }, [pageNum, renderPage, pdfDoc])

    const increasePageNum = () => {
        if (pageNum < numPages) {
            setPageNum(pageNum + 1);
        }
    }
    const decreasePageNum = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    }


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
            <div className="pdfViewer">
                <div className="page">
                    <div className="canvasWrapper">
                        <div className="mx-auto h-fit w-fit">
                            <canvas ref={canvasRef}></canvas>
                        </div>
                    </div>
                    <div ref={textLayerRef} className="textLayer mx-auto">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewer;  