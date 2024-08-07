import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<>
			<Toaster />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search/:type/:profile' element={<Profile />} />
			</Routes>
		</>
	)
}

export default App
