import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/NavigationBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export const Layout = () => {
    return (
        <main>
            <ScrollToTop />
            <NavigationBar />
            <Outlet />
            <Footer />
        </main>
    );
};
