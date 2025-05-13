import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
