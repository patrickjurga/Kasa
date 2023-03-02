import { Link } from "react-router-dom";
import "./Error.css"

function ErrorPage() {
	return (
		<div className="Error__Container">
			<p className="Error__number">404</p>
			<p className="Error__para">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="Error__link">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}

export default ErrorPage;