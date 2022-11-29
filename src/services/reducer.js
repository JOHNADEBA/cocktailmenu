export const reducer = (state, action) => {
	if (action.type === "FETCH") {
		return { ...state, loading: action.loading, cocktails: action.cocktails };
	}
	if (action.type === "ON_CHANGE") {
		return { ...state, searchItem: action.payload };
	}
	if (action.type === "FETCH_ONE_DATA") {
		return {
			...state,
			url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
			searchItem: action.payload,
		};
	}
	if (action.type === "REFETCH") {
		return { ...state, searchItem: "a", url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="};
	}
	if (action.type === "SHOW_MENU") {

		return { ...state, isMobile: !state.isMobile};
	}

	return state;
};
