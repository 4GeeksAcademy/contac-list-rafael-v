import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const ModalEdit = ({ id, contact, slug }) => {
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    console.log(contact)

    const info = ()=>{
        setNombre(contact?.name)
        setDireccion(contact?.address)
        setTelefono(contact?.phone)
        setEmail(contact?.email)
    }

    const modificar = async (e) => {
        e.preventDefault()
        
        let resp = await actions.updateContact (nombre,telefono,email,direccion,id,slug)
        if (resp) {
            navigate("/")
        } else {
            alert("Algo Salio Mal")
        }
    }

    useEffect(()=>{
        info()
    },[id])
    return (
        <div className="modal fade" id="exampleModalEditar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre:</span>
                            <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Direccion:</span>
                            <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control" placeholder="Direccion" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Telefono:</span>
                            <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email:</span>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" onClick={(e)=>modificar(e)} data-bs-dismiss="modal">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalEdit