import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>&copy; {currentYear} Touchdown Tales</p>
			<a href="https://www.flaticon.com/free-icons/video" title="video icons">
				Video icons created by Freepik - Flaticon
			</a>
		</footer>
	);
};

export default Footer;
