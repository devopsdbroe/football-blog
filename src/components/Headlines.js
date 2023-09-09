import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Headlines = () => {
	const [headlines, setHeadlines] = useState([]);
	const [loading, setLoading] = useState(true);

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
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;

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
			<h2>Top Articles</h2>
		</aside>
	);
};

export default Headlines;
