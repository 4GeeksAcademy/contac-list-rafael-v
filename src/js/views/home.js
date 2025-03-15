import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Card } from "../component/card.jsx";



export const Home = () => {
	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getContact()

	}, [])

	return (
		<div className="text-center mt-5">
			{store.contacts.map((item) => (
				// <p>{item.name}</p>
				<Card
				key={item.id}
				name={item.name}
				address={item.address}
				phone={item.phone}
				email={item.email}
				id={item.id}
				/>
			))}




		</div>
	)
};
