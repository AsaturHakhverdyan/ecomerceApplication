import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Product from "../src/Product/Product";
import "./App.css";
import Contact from "./NavItem/Contact";
import Main from "./Main/Main";
import AboutUs from "./NavItem/AboutUs";
import Services from "./NavItem/Services";
import Credit from "./NavItem/Credit";
import Cart from "./Cart/Cart";
import Heart from "./Heart/Heart";
import LoginPage from "./Login/LoginPage";
import Layout from "./layout/layout";

function App() {
	const { pathname } = useLocation();
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						path="/"
						element={<Main />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/aboutus"
						element={<AboutUs />}
					/>
					<Route
						path="/services"
						element={<Services />}
					/>
					<Route
						path="/credit"
						element={<Credit />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="/heart"
						element={<Heart />}
					/>
					<Route
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						path={pathname}
						element={<Product pathname={pathname} />}
					/>
				</Route>
			</Routes>
		</div>
	);
}
export default App;
