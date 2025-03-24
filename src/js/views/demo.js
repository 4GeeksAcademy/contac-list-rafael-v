import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [nombre,setNombre] = useState("")
	const [direccion,setDireccion] = useState("")
	const [telefono,setTelefono] = useState("")
	const [email,setEmail] = useState("")
	const navigate = useNavigate ()

	const agregar = async (e)=>{ 
		e.preventDefault()
		console.log (nombre,direccion,telefono,email)
		//nombre,telefono,email,direccion
		let resp = await actions.createContact(nombre,telefono,email,direccion)
		if (resp){
			navigate("/")
		} else {
			alert ("Algo Salio Mal")
		}
	}

	return (
		<div className="container">
			<h1> agregar contactos </h1>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Nombre:</span>
				<input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
			</div>

			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Direccion:</span>
				<input value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" className="form-control" placeholder="Direccion" aria-label="Username" aria-describedby="basic-addon1"/>
			</div>

			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Telefono:</span>
				<input value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1"/>
			</div>

			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Email:</span>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
			</div>
			<button onClick={(e)=>agregar(e)} type="button" className="btn btn-success">Agregar</button>

		</div>
	);
};
