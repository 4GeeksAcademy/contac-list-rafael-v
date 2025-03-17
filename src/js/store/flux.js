const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []

		},
		actions: {
			// Use getActions to call a function within a fuction

			getContact: async (name) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${name}`)
					console.log(response)
					const data = await response.json()
					console.log(data)
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.log(error)
				}
			},
			createContact: async (nombre,telefono,email,direccion) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rafael/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({

							"name": nombre,
							"phone": telefono,
							"email": email,
							"address": direccion,
						})
					})
					console.log (response)
					if (response.status== 201){
						return true
					} else {
						return false
					}
				} catch (error) {
					console.log(error)
				}
			}

		}
	};
};

export default getState;
