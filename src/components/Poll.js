import React, { useState } from "react";

const Poll = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const [votes, setVotes] = useState({
		"Patrick Mahomes": 0,
		"Josh Allen": 0,
		"Justin Jefferson": 0,
		Other: 0,
	});

	const [hasVoted, setHasVoted] = useState(false);

	const handleVote = () => {
		if (selectedOption && !hasVoted) {
			setVotes({
				...votes,
				[selectedOption]: votes[selectedOption] + 1,
			});
			setSelectedOption(null);
			setHasVoted(true);
		}
	};

	const totalVotes = Object.values(votes).reduce((acc, val) => acc + val, 0);

	return (
		<div className="poll">
			{!hasVoted && (
				<>
					<h2>Which player has the best chance to win MVP this season?</h2>

					{Object.keys(votes).map((option) => (
						<label key={option}>
							<input
								type="radio"
								name="poll"
								value={option}
								onChange={(e) => setSelectedOption(e.target.value)}
							/>
							{option}
						</label>
					))}

					<button onClick={handleVote}>Vote</button>
				</>
			)}

			{hasVoted && (
				<>
					<h2>Results</h2>
					<ul>
						{Object.entries(votes).map(([option, count]) => {
							const percentage =
								totalVotes === 0 ? 0 : (count / totalVotes) * 100;

							return (
								<li key={option}>
									{option} : {count} votes
									<div className="progress-container">
										<div
											className="progress-bar"
											style={{ width: `${percentage}%` }}
										></div>
									</div>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default Poll;
