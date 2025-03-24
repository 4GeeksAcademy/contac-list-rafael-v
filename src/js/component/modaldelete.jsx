import React,{useContext} from "react";
import { Context } from "../store/appContext";

const ModalDelete = ({id,name,slug}) => {
    const {actions,store}=useContext(Context)
    return (
        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Borrar contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        desea borrar el contacto de: <strong>{name}</strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>actions.deleteContact(slug,id)}>Delete Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete





