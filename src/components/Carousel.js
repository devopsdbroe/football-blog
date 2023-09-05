import React, { useState, useEffect } from "react";

const images = ["mac_jones.jpg", "jonathan_gannon.jpg", "justin_jefferson.jpg"];

const Carousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);
	const [isPlaying, setIsPlaying] = useState(true);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		let timer;

		if (isPlaying) {
			timer = setInterval(() => {
				setPrevImageIndex(currentImageIndex);
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
				setAnimate(true);
			}, 7000);
		} else {
			clearInterval(timer);
		}

		return () => {
			clearInterval(timer);
		};
	}, [isPlaying, currentImageIndex]);

	useEffect(() => {
		const animationTimer = setTimeout(() => setAnimate(false), 4000);
		return () => clearTimeout(animationTimer);
	}, [animate]);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div className="carousel">
			<img
				src={`${process.env.PUBLIC_URL}/${images[prevImageIndex]}`}
				alt=""
				className={animate ? "fade-in" : ""}
			/>
			<img
				src={`${process.env.PUBLIC_URL}/${images[currentImageIndex]}`}
				alt=""
				className={animate ? "fade-out" : ""}
			/>
			<button onClick={prevImage}>&#10094;</button>
			<button onClick={nextImage}>&#10095;</button>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? "Pause" : "Play"}
			</button>
		</div>
	);
};

export default Carousel;
