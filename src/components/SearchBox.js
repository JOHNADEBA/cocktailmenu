import { useRef } from "react";
import { useGlobalContext } from "../services/context";

const SearchBox = () => {
	const {  handleSearch } = useGlobalContext();

  const searchValue = useRef('')

	return (
		<div className="search-cont">
			<p>Search Your Favorite Cocktail</p>
			<input
				type="text"
				ref={searchValue}
				onChange={() => handleSearch(searchValue.current.value)}
			/>
		</div>
	);
};

export default SearchBox;
