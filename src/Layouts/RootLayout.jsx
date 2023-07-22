import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

//Components
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header className="header-main">
        <NavigationBar />
      </header>

      <main>
        <div className="main-section">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
