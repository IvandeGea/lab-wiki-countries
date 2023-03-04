import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-info">

            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link"><Link to="/">Home</Link></span>
                        </li>


                        <h2> Lab-WikiCountries</h2>
                    </ul>
                </div>
            </div>
        </nav>
    );
}