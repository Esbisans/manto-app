import React from "react";
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import GenerarPDF from "./GenerarPDF";
//import DocuPDF from "./DocuPDF";
import {PDFDownloadLink} from "@react-pdf/renderer";
//import EjemploV from "./Enviardatos";

function DatosPDF() {
  const [texto, setTexto] = useState("");

  return (
    <div className="d-flex flex-nowrap">
      <SideBar />

        <div className="container">
            <h1>Ingrese texto </h1>
            <textarea
            cols="100"
            rows="5"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            ></textarea>
            <PDFDownloadLink document={<GenerarPDF texto={texto}/>} fileName="Manual de calidad.pdf">
            <button type="button" class="btn btn-primary">Primary
            Descargar
            </button>
            </PDFDownloadLink>
        </div>
    </div>
  );
}

export default DatosPDF;
