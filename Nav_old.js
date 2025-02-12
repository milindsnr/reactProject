import { Outlet, Link } from "react-router-dom";
function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Add Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Title</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></>);
}

export default Nav;