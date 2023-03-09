import { useRouteError } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer"

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="page__container">
            <Navbar />
            <div className="page__content">
                <Error />
            </div>
            <Footer />
        </div>
    );
}

export default ErrorPage;