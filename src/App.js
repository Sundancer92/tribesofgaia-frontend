import CustomNavbar from "./components/Navbar/Navbar";

//React-Bootstrap
import Container from 'react-bootstrap/Container';

//redux
import { store } from "./store/store";
import { Provider } from "react-redux";

//React-Router-Dom
import { Routes, Route, Outlet } from "react-router-dom";
//Rutas
import Home from "./components/routes/Home";
import Gifts from "./components/routes/Gifts";
import NoMatch404 from "./components/routes/NoMatch404";

function App() {
	return (
		<>
			{/* <CustomNavbar /> */}

			<Routes>
				<Route path="/" element={<CustomNavbar />}>
					<Route index element={<Home />} />
					<Route path="/gifts" element={<Gifts />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path="*" element={<NoMatch404 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
