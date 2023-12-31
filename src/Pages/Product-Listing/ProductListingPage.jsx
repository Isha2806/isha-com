import { useContext, useState } from "react";
import FilterBox from "./FilterBox";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductListingPage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../Components/Pagination/Pagination";
import img404 from "../../assets/404.jpg";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { BeatLoader } from "react-spinners";
import { ACTION_TYPES } from "../../utils/constant";

function ProductListingPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { products, displayData, booksDataDispatch, currentPage } =
    useContext(BooksDataContext);
  useDocumentTitle("Products | isha-com");

  const booksPerPage = 12;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = displayData?.slice(indexOfFirstBook, indexOfLastBook);

  function paginate(pageNumber) {
    booksDataDispatch({
      type: ACTION_TYPES.SET_PRODUCTS_PAGE_NUM,
      payload: pageNumber,
    });
  }

  const noBooksFoundDisplay = products?.data.length !== 0 &&
    displayData?.length === 0 && (
      <div className="no-books-found">
        <h2>Oops! No books found that match your filters.</h2>
        <p>
          Try expanding genres, checking back later for updates, and exploring
          our diverse collection. Don't give up, the perfect book is just
          waiting to be discovered!
        </p>
        <img src={img404} alt="Happy-Reading" />
        <p>Happy reading!</p>
      </div>
    );

  const productsMapped = products?.isLoading ? (
    <BeatLoader color="#ffcd3c" />
  ) : products?.isError ? (
    <p>{products.isError}</p>
  ) : (
    currentBooks.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))
  );

  return (
    <div className="product-listing-page">
      <div className="product-listing-heading">
        <h1>Showing all Books</h1>
        {"  "}
        <p> {`(${displayData.length} Books)`} </p>
      </div>
      <div className="product-listing-content">
        <div className="mobile-filter-box">
          <button
            className="show-filter-btn"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <FaFilter /> {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </button>
          {showMobileFilters && <FilterBox />}
        </div>
        <div className="desktop-filter-box">
          <FilterBox />
        </div>
        <div className="product-list">
          {productsMapped} {noBooksFoundDisplay}
        </div>
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={displayData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ProductListingPage;
