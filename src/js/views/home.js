import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Card } from "../component/card.jsx";
import ModalDelete from "../component/modaldelete.jsx";
import ModalEdit from "../component/modaledit.jsx";



export const Home = () => {
	const { actions, store } = useContext(Context)
	const [name, setName] = useState("rafael")
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined
	})
	const [showModalEdit, setShowModalEdit] = useState({
		showModal: false,
		id: undefined,
		contact: undefined
	})
	useEffect(() => {
		actions.getContact(name)

	}, [])

	return (
		<div className="text-center mt-5">
			<h3>Busca o Crea agenda</h3>

			<input value={name} onChange={(e) => setName(e.target.value)} />

			<h3>Contactos</h3>
			{
				// valor truthy y su longitud mayor a cero entonces:  
				store.contacts && store.contacts.length > 0 ? (
					store.contacts.map((item) => (
						// <p>{item.name}</p>
						<Card
							key={item.id}
							name={item.name}
							address={item.address}
							phone={item.phone}
							email={item.email}
							id={item.id}
							onDelete={() => setShowModalDelete({ showModal: true, id: item.id, name: item.name })}
							onEdit={() => setShowModalEdit({ showModal: true, id: item.id, contact: item })}
						/>
					))
				) : (
					<h5> No tiene contactos </h5>
				)
			}

			<ModalDelete
				show={showModalDelete.showModal}
				id={showModalDelete.id}
				name={showModalDelete.name}
				onClose={() => setShowModalDelete({ showModal: false })}
				slug={name}
			/>
			<ModalEdit
				show={showModalEdit.showModal}
				id={showModalEdit.id}
				contact={showModalEdit.contact}
				onClose={() => setShowModalEdit({ showModal: false })}
				slug={name}
			/>
		</div>
	)
};
