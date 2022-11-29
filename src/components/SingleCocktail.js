import { Link } from "react-router-dom";
import { useGlobalContext } from "../services/context";

const SingleCocktail = () => {
	const { cocktails, fetchAllDataOnBack } = useGlobalContext();
	const {
		idDrink,
		strDrinkThumb,
		strDrink,
		strCategory,
		strGlass,
		strAlcoholic,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
	} = cocktails[0];
	const strIngredient = [
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
	];
	return (
		<div className="single-cock">
			<button onClick={() => fetchAllDataOnBack()} className="home-btn">
				<Link className="err-back" to={"/"}>
					BACK HOME
				</Link>
			</button>
			{/* <h2 className="name">{strDrink}</h2> */}
			<section className="sub-body" key={idDrink}>
				<div className="single-img-cont">
				<img className="single-img" src={strDrinkThumb} alt={strDrink} />
				</div>
				
				<div className="right">
					<p>
						<span>Name : </span>
						{strDrink}
					</p>
					<p>
						<span>Category : </span>
						{strCategory}
					</p>
					<p>
						<span>Info : </span>
						{strAlcoholic}
					</p>
					<p>
						<span>Glass : </span>
						{strGlass}
					</p>
					

					<div className="ingr-cont">
						<p className="ingr">
							<span >Ingredients : </span>
						
					<div className="ingredient-body">	{strIngredient.map((ing, i) => {
							return (
								<p className="ingr" key={i}>
									 {ing} 
								</p>
							);
						})}</div></p>
					</div>
					<p className="instruction">
						<span>Instruction : </span>
						{strInstructions}
					</p>
					
				</div>
			</section>
		</div>
	);
};

export default SingleCocktail;
