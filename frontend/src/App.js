import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Mobiles from './pages/Mobiles'

import WithNav1 from './components/WithNav1'
import WithNav2 from './components/WithNav2'
import Footer from './components/Footer'
import Search from './pages/Search'
import { useAuthContext } from './hooks/useAuthContext'
import FilterResult from './pages/FilterResult'

function App() {
	const { user } = useAuthContext()
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WithNav1 />}>
					<Route path="/" element={<Home />} />
					<Route path="/mobiles" element={<Mobiles />} />
					<Route path="/filter" element={<FilterResult />} />
					<Route path="/product/:_id" element={<Product />} />
					<Route
						path="/profile"
						element={user ? <Profile /> : <Navigate to="/login" />}
					/>
					<Route
						path="/favorites"
						element={
							user ? <Favorites /> : <Navigate to="/login" />
						}
					/>
					<Route path="/search" element={<Search />} />
				</Route>
				<Route element={<WithNav2 />}>
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/" />}
					/>
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
