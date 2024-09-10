// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/auth/login" element={<LoginForm />} />
				<Route path="/auth/signup" element={<SignupForm />} />
			</Routes>
		</Router>
	);
}

export default App;
