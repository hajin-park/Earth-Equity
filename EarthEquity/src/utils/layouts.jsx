import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Navbar/NavigationBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Graph from "../Components/Graph/Graph.jsx";
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
