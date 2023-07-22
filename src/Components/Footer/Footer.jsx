import { Link } from "react-router-dom";
import "./Footer.css";
import { ACTION_TYPES } from "../../utils/constant";
import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function Footer() {
  const { booksDataDispatch } = useContext(BooksDataContext);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="footer-section quick-links-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() =>
                  booksDataDispatch({
                    type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM,
                  })
                }
              >
                Explore
              </Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: email@isha-com.com
            <br />
            Phone: 213-456-789
          </p>
        </div>
        <div className="footer-section">
          <h3>Connect with isha</h3>
          <ul className="social-links">
            <li>
              <Link to="https://github.com/isha2806" target="_blank">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tNC40NjYgMTkuNTljLS40MDUuMDc4LS41MzQtLjE3MS0uNTM0LS4zODR2LTIuMTk1YzAtLjc0Ny0uMjYyLTEuMjMzLS41NS0xLjQ4MSAxLjc4Mi0uMTk4IDMuNjU0LS44NzUgMy42NTQtMy45NDcgMC0uODc0LS4zMTItMS41ODgtLjgyMy0yLjE0Ny4wODItLjIwMi4zNTYtMS4wMTYtLjA3OS0yLjExNyAwIDAtLjY3MS0uMjE1LTIuMTk4LjgyLS42NC0uMTgtMS4zMjQtLjI2Ny0yLjAwNC0uMjcxLS42OC4wMDMtMS4zNjQuMDkxLTIuMDAzLjI2OS0xLjUyOC0xLjAzNS0yLjItLjgyLTIuMi0uODItLjQzNCAxLjEwMi0uMTYgMS45MTUtLjA3NyAyLjExOC0uNTEyLjU2LS44MjQgMS4yNzMtLjgyNCAyLjE0NyAwIDMuMDY0IDEuODY3IDMuNzUxIDMuNjQ1IDMuOTU0LS4yMjkuMi0uNDM2LjU1Mi0uNTA4IDEuMDctLjQ1Ny4yMDQtMS42MTQuNTU3LTIuMzI4LS42NjYgMCAwLS40MjMtLjc2OC0xLjIyNy0uODI1IDAgMC0uNzgtLjAxLS4wNTUuNDg3IDAgMCAuNTI1LjI0Ni44ODkgMS4xNyAwIDAgLjQ2MyAxLjQyOCAyLjY4OC45NDR2MS40ODljMCAuMjExLS4xMjkuNDU5LS41MjguMzg1LTMuMTgtMS4wNTctNS40NzItNC4wNTYtNS40NzItNy41OSAwLTQuNDE5IDMuNTgyLTggOC04czggMy41ODEgOCA4YzAgMy41MzMtMi4yODkgNi41MzEtNS40NjYgNy41OXoiLz48L3N2Zz4="/>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/shaaaviii" target="_blank">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tLjEzOSA5LjIzN2MuMjA5IDQuNjE3LTMuMjM0IDkuNzY1LTkuMzMgOS43NjUtMS44NTQgMC0zLjU3OS0uNTQzLTUuMDMyLTEuNDc1IDEuNzQyLjIwNSAzLjQ4LS4yNzggNC44Ni0xLjM1OS0xLjQzNy0uMDI3LTIuNjQ5LS45NzYtMy4wNjYtMi4yOC41MTUuMDk4IDEuMDIxLjA2OSAxLjQ4Mi0uMDU2LTEuNTc5LS4zMTctMi42NjgtMS43MzktMi42MzMtMy4yNi40NDIuMjQ2Ljk0OS4zOTQgMS40ODYuNDExLTEuNDYxLS45NzctMS44NzUtMi45MDctMS4wMTYtNC4zODMgMS42MTkgMS45ODYgNC4wMzggMy4yOTMgNi43NjYgMy40My0uNDc5LTIuMDUzIDEuMDgtNC4wMyAzLjE5OS00LjAzLjk0MyAwIDEuNzk3LjM5OCAyLjM5NSAxLjAzNy43NDgtLjE0NyAxLjQ1MS0uNDIgMi4wODYtLjc5Ni0uMjQ2Ljc2Ny0uNzY2IDEuNDEtMS40NDMgMS44MTYuNjY0LS4wOCAxLjI5Ny0uMjU2IDEuODg1LS41MTctLjQzOS42NTYtLjk5NiAxLjIzNC0xLjYzOSAxLjY5N3oiLz48L3N2Zz4="/>
              
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/isha-patel-87335a203"
                target="_blank"
              >
               <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="/>
               </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} isha-com. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
