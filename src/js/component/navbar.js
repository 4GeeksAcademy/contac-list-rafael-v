import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" style= {{textDecoration:"none",paddingLeft:"10px"}}>
				<span className="navbar-brand mb-0 h1">Agenda</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-outline-success">Agregar Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
