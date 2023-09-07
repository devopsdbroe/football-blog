import React, { useState, useEffect } from "react";

const images = [
	{
		src: "mac_jones.jpg",
		caption: "Why Mac Jones could surprise some people this year",
	},
	{
		src: "jonathan_gannon.jpg",
		caption: "The Cardinals seem destined for the 1st overall pick",
	},
	{
		src: "justin_jefferson.jpg",
		caption: "Letdown season? The Vikings could be in for a long year",
	},
];

const Carousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		let timer;

		if (isPlaying) {
			timer = setInterval(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
			}, 7000);
		} else {
			clearInterval(timer);
		}

		return () => {
			clearInterval(timer);
		};
	}, [isPlaying, currentImageIndex]);

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
			<a href="#">
				<img
					src={`${process.env.PUBLIC_URL}/${images[currentImageIndex].src}`}
					alt=""
				/>
			</a>
			<div className="caption">{images[currentImageIndex].caption}</div>
			<div className="controls">
				<button onClick={prevImage}>&#10094;</button>
				<button onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? "⏸" : "▶"}
				</button>
				<button onClick={nextImage}>&#10095;</button>
			</div>
		</div>
	);
};

export default Carousel;
