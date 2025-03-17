import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Card } from "../component/card.jsx";



export const Home = () => {
	const { actions, store } = useContext(Context)
	const [name,setName] = useState("")
	useEffect(() => {
		actions.getContact(name)

	}, [name])

	return (
		<div className="text-center mt-5">
			<h3>Busca o Crea agenda</h3>

			<input onChange={(e)=>setName(e.target.value)}/>

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
					/>
				))
			):(
				<h5> No tiene contactos </h5>
			)


			 
			





			}




		</div>
	)
};
