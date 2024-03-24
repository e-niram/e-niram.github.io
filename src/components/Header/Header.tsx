import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../pages/Contact/Contact";

export default function Header() {
	const handleCVonClick = () => {
		console.log("Downloading CV...");
	};

	return (
		<div id="#header">
			<ul>
				<li>
					<a onClick={handleCVonClick} href="">
						CV
					</a>
				</li>
				<li>
					<Link to={`/contact`}>Contact</Link>
				</li>
				<li>
					<Link to={`/experience`}>Experience</Link>
				</li>
				<li>
					<Link to={`/about`}>About</Link>
				</li>
			</ul>
		</div>
	);
}
