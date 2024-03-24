import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../pages/Contact/Contact";
import { Typography } from "../Typography/Typography";

export default function Header() {
	const handleCVonClick = () => {
		console.log("Downloading CV...");
	};

	return (
		<div id="#header">
			<ul>
				<li>
					<a onClick={handleCVonClick} href="">
						<Typography color="text">CV</Typography>
					</a>
				</li>
				<li>
					<Link to={`/contact`}>
						<Typography color="text">Contact</Typography>
					</Link>
				</li>
				<li>
					<Link to={`/experience`}>
						<Typography color="text">Experience</Typography>
					</Link>
				</li>
				<li>
					<Link to={`/about`}>
						<Typography color="text">About</Typography>
					</Link>
				</li>
			</ul>
		</div>
	);
}
