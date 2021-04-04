const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			favorites: [],
			planets: []
		},
		actions: {
			fetchPlanets: async () => {
				let URL = "https://swapi.dev/api/planets/";
				let REQUEST = {
					method: "GET",
					headers: {
						"content-type": "application/json"
					}
				};
				const response = await fetch(URL, REQUEST);
				const json = await response.json();

				console.log("Data", json);
				setStore({ planets: json.results });
			},
			fetchPeople: async () => {
				let url = "https://swapi.dev/api/people/";
				let request = {
					method: "GET",
					headers: {
						"content-type": "application/json"
					}
				};
				const response = await fetch(url, request);
				const json = await response.json();

				console.log("Data", json);
				setStore({ people: json.results });
			},
			manageFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			removeFavorite: index => {
				const store = getStore();
				const filter = store.favorites.filter(item => item != index);
				setStore({ favorites: filter });
				localStorage.setItem("favorites", JSON.stringify(store.favorites));
				console.log(">>>>deleteFavorite", store.favorites);
			}
		}
	};
};

export default getState;
