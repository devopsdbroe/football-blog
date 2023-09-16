import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

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
			<img
				src={`${process.env.PUBLIC_URL}/${images[currentImageIndex].src}`}
				alt=""
			/>
			<div className="controls">
				<button onClick={prevImage}>
					<i className="fa fa-arrow-left"></i>
				</button>
				<button onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? (
						<i className="fa fa-pause"></i>
					) : (
						<i className="fa fa-play"></i>
					)}
				</button>
				<button onClick={nextImage}>
					<i className="fa fa-arrow-right"></i>
				</button>
			</div>
			<div className="caption">{images[currentImageIndex].caption}</div>
		</div>
	);
};

export default Carousel;
