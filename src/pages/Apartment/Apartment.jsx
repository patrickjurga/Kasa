import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../components/Collapse/Collapse.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel  from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Info from "../../components/Info/Info";

function Apartment() {
	const params = useParams();
	const navigate = useNavigate();

	const [PickedAppart, setPickedAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/logements.json");
			const picked = res.data.find(({ id }) => id === params.id);
			res.data.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/Error", { state: { message: "Can't get data" } });
			}
		};
		getData();
		
	}, [navigate, params.id]);

	const equipments = PickedAppart && PickedAppart.equipments;
	const EquipmentsList = PickedAppart &&
	equipments.map((item, index) => (
		<li key={index} className="Collapse__EquipmentsList">
			{item}
		</li>
	));

  return (
      <div>
        <Navbar />
		{PickedAppart && <Carousel pictures={PickedAppart.pictures} />}
		<div className="Information__Container">
			<div>
				{PickedAppart && <Info infoTitle={PickedAppart.title} infoLocation={PickedAppart.location} infoTag={PickedAppart.tags} />}
			</div>
			<div className="Information__host">
				{PickedAppart && <Host  hostImage={PickedAppart.host.picture} hostName={PickedAppart.host.name} />}
				{PickedAppart && <Rating rating={PickedAppart.rating} />}
			</div>
		</div>
		<div className="Collapse__Container--Apartment">
			<div className="Collapse__Apartment">
				{PickedAppart && <Collapse title="Description" description={PickedAppart.description}/>}
			</div>
			<div className="Collapse__Apartment">
				{PickedAppart && <Collapse title="Équipements" description={EquipmentsList}/>}		
			</div>
		</div>
        <Footer />
      </div>
  );

}

export default Apartment;