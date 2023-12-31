import { useContext } from "react";
import "./HomePage.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { useNavigate } from "react-router";
import { ACTION_TYPES } from "../../utils/constant";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { BeatLoader } from "react-spinners";

function HomePage() {
  const { products, categories, booksDataDispatch, expensiveBookInCollection } =
    useContext(BooksDataContext);
  const navigate = useNavigate();
  useDocumentTitle("isha-com");

  const bestsellerbooks = products?.data?.filter(
    ({ isBestSeller, stockQty }) => isBestSeller && stockQty
  );

  const popularCategoriesDisplay = categories?.data
    ?.slice(0, 6)
    .map((category) => (
      <CategoryCard
        image={category.img}
        categoryName={category.categoryName}
        description={category.description}
        key={category._id}
      />
    ));

  const bestsellarBooksDisplay = bestsellerbooks
    ?.slice(0, 8)
    ?.map((book) => <ProductCard key={book._id} product={book} />);

  function handleViewBestsellersBtn() {
    booksDataDispatch({
      type: ACTION_TYPES.VIEW_BESTSELLERS,
      payload: { priceSlider: expensiveBookInCollection },
    });
    navigate("/products");
  }

  function handleExploreBooksButtonClick() {
    booksDataDispatch({
      type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM,
    });
    navigate("/products");
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://getwallpapers.com/wallpaper/full/f/8/4/888661-beautiful-library-background-images-1920x1080-iphone.jpg"
          alt="Hero"
        />
        <div className="hero-content">
          <h1>Welcome to isha-com</h1>
          <p>
         Read this, I think you might like it.
          </p>
          <button
            className="explore-button"
            onClick={handleExploreBooksButtonClick}
          >
            Explore Books
          </button>
        </div>
      </div>
      <section className="home-page-section">
        <div className="home-page-section-heading">
          <h2>isha Bestsellers</h2>
          <button
            className="view-all-button btn-secondary"
            onClick={handleViewBestsellersBtn}
          >
            View All Bestsellers
          </button>
        </div>
        <div className="product-card-container">
          {products?.isLoading ? (
            <BeatLoader color="#ffcd3c" />
          ) : products?.isError ? (
            <p>{products.isError}</p>
          ) : (
            bestsellarBooksDisplay
          )}
        </div>
      </section>
      <section className="home-page-section">
        <div className="home-page-section-heading">
          <h2>Popular Categories</h2>
          <button
            className="view-all-button btn-secondary"
            onClick={() => navigate("/categories")}
          >
            View All Categories
          </button>
        </div>
        <div className="product-card-container">
          {categories.isLoading ? (
            <BeatLoader color="#ffcd3c" />
          ) : categories.isError ? (
            <p>{categories.isError}</p>
          ) : (
            <>{popularCategoriesDisplay}</>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
