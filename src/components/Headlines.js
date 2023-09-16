import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Headlines = () => {
	const [headlines, setHeadlines] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://site.api.espn.com/apis/site/v2/sports/football/nfl/news"
				);

				setHeadlines(response.data.articles);
				setLoading(false);
			} catch (error) {
				console.error("There was a problem fetching data", error);
				setError("There was a problem fetching the latest headlines");
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading)
		return (
			<aside>
				<h3>Loading...</h3>
			</aside>
		);

	if (error) {
		return (
			<aside>
				<h3>Error: {error}</h3>
			</aside>
		);
	}

	return (
		<aside>
			<h2>Latest Headlines:</h2>
			{headlines.map((headline, index) => (
				<article key={index}>
					<h3>
						<a
							href={headline.links.web.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{headline.description}
						</a>
					</h3>
				</article>
			))}
		</aside>
	);
};

export default Headlines;
