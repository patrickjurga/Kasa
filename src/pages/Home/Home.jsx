import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;