import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import WithNav1 from "./components/WithNav1";
import WithNav2 from "./components/WithNav2";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WithNav1 />}>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route element={<WithNav2 />}>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
			</Routes>
			{Location.pathname === "/signup" || "/login" ? " " : <Footer/>}
		</BrowserRouter>
	);
}

export default App;
