
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/watermelon.png";

export default function Header() {

    // let { url } = useRouteMatch();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#282c34", color: "white" }}>
            <div className="container-fluid">
                <NavLink activeClassName="active" className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-top" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/students">Students</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/lessons"> Lessons</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-dark" style={{ backgroundColor: "#282c34", color: "white" }}>
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">
        //             <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-top" />
        //         </Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/students">Students</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/lessons">Lessons</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}