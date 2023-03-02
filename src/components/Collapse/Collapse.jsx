import { useState } from "react";
import "./Collapse.css"
import chevron from "../../assets/images/vector_haut.png";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="Collapse__Container">
        <div className="Collapse__header" onClick={toggleCollapse}>
            <h2 className="Collapse__title">{props.title}</h2>
            <img src={chevron} alt="chevron" className={`Chevron ${isCollapsed ? '' : 'Rotate'}`} />
        </div>
        <div className={`Collapse__content ${isCollapsed ? '' : 'Collapse__content--expanded'}`}>
            <p className="Collapse__para">{props.description}</p>
        </div>
    </div>
  );
}

export default Collapse;