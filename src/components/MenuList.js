import { Link } from "react-router-dom";
import { useGlobalContext } from "../services/context";
import SearchBox from "./SearchBox";

const MenuList = () => {
	const { cocktails, loading, fetchOneData } = useGlobalContext();
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<div className="menulist-cont">
			<SearchBox />
			<h2 className="cocktail-head">
				{cocktails.length > 1
					? "Cocktails"
					: cocktails.length === 1
					? "Cocktail"
					: "No Result Found"}
			</h2>

			<div className="cock-cont">
				{cocktails.length > 0 &&
					cocktails.map((cocktail) => {
						const { idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic } =
							cocktail;
						return (
							<section key={idDrink}>
								<img className="menu-img" src={strDrinkThumb} alt={strDrink} />
								<h2>{strDrink}</h2>
								<p className="glass">{strGlass}</p>
								<p className="alcohol">{strAlcoholic}</p>

								<button onClick={() => fetchOneData(idDrink)}>
									{" "}
									<Link className="err-back" to={"/cocktail/" + idDrink}>
										DETAILS
									</Link>
								</button>
							</section>
						);
					})}
			</div>
		</div>
	);
};

export default MenuList;
