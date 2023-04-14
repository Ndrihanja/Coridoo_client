import React, {useState} from 'react';
import "./viewFichier.scss";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Viewpdf = () => {

    const [pdfFile, setPDFFile] = useState(null);
    const  [viewPdf, setViewPdf] = useState(null);

    const fileType = ['application/pdf']
    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if(selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else {
                setPDFFile(null)
            }
        }
        else {
            console.log("please select")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
    }

    const newplugin = defaultLayoutPlugin();

  return (
      <>
          <h1>Ito ilay zavatra</h1>
        <div className="view-project">
            <form action="" className="form" onSubmit={handleSubmit}>
                <input type="file" className="form-control" onChange={handleChange}/>
                <button type="submit" className="btn-Add">View PDF</button>
            </form>

            <h2>View pdf</h2>
            <div className="pdf-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                    { viewPdf && <>
                        <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
                        </> }
                    {!viewPdf && <>No PDF</>}
                </Worker>
            </div>
        </div>
      </>
  );
};

export default Viewpdf;