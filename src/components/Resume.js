import '../styles.css';
import { Document, pdfjs } from 'react-pdf';
const samplePdf = `https://cors-anywhere.herokuapp.com/https://github.com/SauravKhare/sauravkhare-homepage/raw/master/public/assets/Resume%2004-07-2021.pdf`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    return(
        <div>
            <Document file={samplePdf} />
        </div>
    )
}

export default Resume;