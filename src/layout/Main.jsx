import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";


const Main = () => {
    const location = useLocation()
    const navFooter = location.pathname.includes('login')
    return (
        <>
            {navFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {navFooter || <Footer></Footer>}
        </>
    );
};

export default Main;