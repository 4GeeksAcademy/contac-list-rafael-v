const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]

		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getContact: async (name) => {
				try {
				const response = await fetch (`https://playground.4geeks.com/contact/agendas/${name}`)
				console.log(response)
				const data = await response.json()
				console.log(data)
				setStore({contacts:data.contacts})
				} catch (error) {
					console.log(error)
				}
			},
			
		}
	};
};

export default getState;
