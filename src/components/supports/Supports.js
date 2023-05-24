import React from "react";
import FullNavigationBar from "../FullNavigationBar";
import SectionBar from "../SectionBar";
import { Accordion } from "flowbite-react";

const Supports = () => {
    return (
        <div className="max-h-screen h-screen overflow-y-auto overflow-x-hidden bg-gray-900">
            <FullNavigationBar />
            <SectionBar chosen={'Support'} />
            <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white my-4" >
              <div className="text-gray-200 text-2xl font-semibold">
                Frequent asked questions
              </div>
                <Accordion collapseAll={true}>
                    <Accordion.Panel>
                      <Accordion.Title>
                        What types of files can I upload to OneRead?
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-300">
                            At this time, OneRead only allows users to upload PDF files. 
                            We believe that PDF is the most convenient and widely-used 
                            format for digital reading materials, and our platform is 
                            optimized to provide the best possible reading experience for 
                            PDF files. If you have other types of documents that you would 
                            like to use with OneRead, we recommend converting them to PDF 
                            before uploading.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                      <Accordion.Title>
                        What types of files can I upload to OneRead?
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-300">
                            At this time, OneRead only allows users to upload PDF files. 
                            We believe that PDF is the most convenient and widely-used 
                            format for digital reading materials, and our platform is 
                            optimized to provide the best possible reading experience for 
                            PDF files. If you have other types of documents that you would 
                            like to use with OneRead, we recommend converting them to PDF 
                            before uploading.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                      <Accordion.Title>
                        Is there a limit to the number of files I can upload to OneRead?
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-300">
                            Yes, there is a limit to the total size of files that you can 
                            upload to OneRead. Currently, the limit is set to 5MB. However, 
                            there is no limit on the number of files you can upload in each 
                            upload session. You can upload multiple files as long as the 
                            combined size of all the files does not exceed the 5MB limit. 
                            This ensures that users can efficiently organize their reading 
                            materials while maintaining a reasonable file size constraint for 
                            optimal performance.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
 
                    <Accordion.Panel>
                      <Accordion.Title>
                        Can I share my reading materials with others?
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-300">
                        Currently, OneRead does not support the feature to share 
                        reading materials with others. The app is designed to be 
                        a personal reading and organization tool, focused on enhancing 
                        the individual user's reading experience.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                </Accordion> 
            </div>
        </div>
    )
}
export default Supports;