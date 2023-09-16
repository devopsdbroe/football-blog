import React from "react";
import Header from "./components/Header";
import Headlines from "./components/Headlines";
import Poll from "./components/Poll";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Headlines />
			<Poll />
			<Carousel />
			<Footer />
		</div>
	);
}

export default App;
