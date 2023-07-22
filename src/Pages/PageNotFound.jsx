import "./PageNotFound.css";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import imag404 from '../assets/404.jpg'

function PageNotFound() {
  useDocumentTitle("Page Not Found | isha-com");
  return (
    <div className="page-not-found">
      <h2>Error 404: Page Not Found</h2>
      <p>
        Oops! Looks like you've wandered off the beaten path of our online
        bookstore.
      </p>
      <p>Our literary links have gone on a thrilling adventure of their own.</p>
      <p>
        But fear not! We're busy unraveling this bookish mystery and will guide
        you back to the right page before you can say "bestseller."
      </p>
      <img src = {imag404} alt=" Reading a Book" />
      <p>Sit tight and let the magic unfold. Happy reading!</p>
    </div>
  );
}

export default PageNotFound;
