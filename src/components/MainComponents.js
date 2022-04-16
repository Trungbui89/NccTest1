import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WebContent from "./WebContent";

function Main() {
    return (
        <div className="main">
            <NavBar />
            <WebContent />
            <Footer />
        </div>
    )
}
export default Main