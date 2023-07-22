import "./PageNotFound.css";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import imag404 from '../assets/404.jpg'

function PageNotFound() {
  useDocumentTitle("Page Not Found | isha-com");
  return (
    <div className="page-not-found">
      <h2>Error 404: Page Not Found</h2>
      
      <img src = {imag404} alt=" book" />
      
    </div>
  );
}

export default PageNotFound;
