import React, { useState, useEffect } from "react";
import axios from "axios";
import "./viewFichier.scss";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFComponent = () => {
  const [pdf, setPdf ] = useState(null);
   useEffect(() => {
       const fetchPdf = async () => {

           try {
               const response = await axios.get("http://localhost:8001/api/pdf", {
                   responseType: "blob",
               });
               const pdf = URL.createObjectURL(new Blob([response.data]));
               setPdf(pdf);
           } catch (e) {
               console.error(e);
           }
       };

       fetchPdf();
   }, []);

    const newplugin = defaultLayoutPlugin();

   return (
       <>
           <div className="pdf-container">
               <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                   { pdf && <>
                       <Viewer fileUrl={pdf} plugins={[newplugin]}/>
                   </> }
                   {!pdf && <>No PDF</>}
               </Worker>
           </div>
       </>
   );
};

export default PDFComponent;