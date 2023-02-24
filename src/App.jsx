import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;