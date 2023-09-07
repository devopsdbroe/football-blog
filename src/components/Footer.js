import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>&copy; {currentYear} Just Another Football Blog</p>
			<p>Headlines Courtesy of ESPN.com</p>
		</footer>
	);
};

export default Footer;
