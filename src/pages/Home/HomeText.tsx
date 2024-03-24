import * as React from "react";
import Footer from "../../components/Footer/Footer";
import "./HomeText.css";
import { Typography } from "../../components/Typography/Typography";

export default function HomeText() {
	return (
		<div className="flexVerticalContainer">
			<p className="textPrimary">Hi, my name is</p>
			<h1 className="textSecondary">Esteban Marín</h1>
			<h2 className="textDisabled">I like to solve problems</h2>
			<Footer />
		</div>
	);
}
