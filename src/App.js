import React from "react";
import Header from "./components/Header";
import Headlines from "./components/Headlines";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Headlines />
			<Carousel />
			<Footer />
		</div>
	);
}

export default App;
