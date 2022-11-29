import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";


const AppContext = React.createContext();

const initialState = {
	loading: true,
	searchItem: "a",
	cocktails: [],
    url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
	isMobile: false
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async (url, searchItem) => {
		const response = await fetch(`${url}${searchItem}`);
		const data = await response.json();
		if (!data.drinks) {
			
			dispatch({ type: "FETCH", loading: false, cocktails: [] });
			return
		}
		dispatch({ type: "FETCH", loading: false, cocktails: data.drinks });
	};

	const handleSearch = (event) => {
		dispatch({ type: "ON_CHANGE", payload: event });
	};

    const fetchOneData = (id) => {
		dispatch({ type: "FETCH_ONE_DATA", payload: id});
	};

    const fetchAllDataOnBack = () => {
		dispatch({ type: "REFETCH"});
	};

 const showMenu = () => {
		dispatch({ type: "SHOW_MENU"});
		console.log(state.isMobile);
	};


	useEffect(() => {
		fetchData(state.url, state.searchItem);
	}, [state.url, state.searchItem]);

	return (
		<AppContext.Provider value={{ ...state, handleSearch, fetchOneData, fetchAllDataOnBack, showMenu }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
