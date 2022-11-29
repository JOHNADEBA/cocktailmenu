import { Link } from "react-router-dom";
import { useGlobalContext } from "../services/context";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const menus = ["Home", "About"];
	const { fetchAllDataOnBack, isMobile, showMenu } = useGlobalContext();
	return (
		<header>
			<div>
				<Link to="/">
					{" "}
					<img
						className="logo"
						src="https://www.thecocktaildb.com/images/logo.png"
						alt="logo"
						onClick={() => fetchAllDataOnBack()}
					/>
				</Link>
			</div>

			<div className="right-menu ">
				{menus.map((menu, index) => {
					return (
						<ul key={index}>
							<li
								className="menu"
								onClick={() => {
									fetchAllDataOnBack();
								}}
							>
								<Link
									className="link"
									to={menu === "Home" ? "/" : "/" + menu.toLowerCase()}
								>
									{menu}
								</Link>
							</li>
						</ul>
					);
				})}
			</div>
			{!isMobile && (
				<button className="menu-icon">
					<FaBars onClick={() => showMenu()} />
				</button>
			)}
			{isMobile && (
				<button className="menu-icon">
					<FaTimes onClick={() => showMenu()} />
				</button>
			)}

			{isMobile && (
				<div className="mobile-menu">
					{menus.map((menu, index) => {
						return (
							<ul key={index}>
								<li
									className="menu"
									onClick={() => {
										fetchAllDataOnBack();
										showMenu();
									}}
								>
									<Link
										className="link"
										to={menu === "Home" ? "/" : "/" + menu.toLowerCase()}
									>
										{menu}
									</Link>
								</li>
							</ul>
						);
					})}
				</div>
			)}
		</header>
	);
};

export default Header;
