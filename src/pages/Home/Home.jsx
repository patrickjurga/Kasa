import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function Home() {

    const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data));
	}, []);

    return (
        <div>
            <Navbar />
            <Banner />
            <main className="Main__Container">
                <div className="Cards__Container">
                    {data.map((appart) => (
                        <Link className="Cards__link" to={`/Apartment/${appart.id}`} key={appart.id}>
                            <Cards cover={appart.cover} title={appart.title} />
                        </Link>
                    ))}
                 </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;