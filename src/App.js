import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import SingleCocktail from "./components/SingleCocktail";
import Error from "./components/Error";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
			</div>
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="cocktail/:id" element={<SingleCocktail />} />
				<Route exact path="/" element={<MenuList />} />
				<Route path="*" element={<Error />} />
			</Routes>


		</Router>
	);
}

export default App;
