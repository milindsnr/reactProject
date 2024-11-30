import { Outlet, Link } from "react-router-dom";
function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ChatList">Group Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/UserList">User List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EditList">Edit List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/DocumentList">Document List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <Outlet />
        </div>
    </>);
}

export default Nav;