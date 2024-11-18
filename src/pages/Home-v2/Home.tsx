import * as React from "react";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { Typography } from "../../components/Typography/Typography";
import Button from "@mui/material/Button/Button";

export default function Home() {
	return (
		<div className="flexHorizontalContainer">
			<div className="flexVerticalContainer">
				<Typography color="secondary" size="xxx-large" weight="extra-bold">
					Esteban Marín
				</Typography>
				<Button>Let's work</Button>
			</div>
			<div className="anotherFlexVerticalContainer">
				<Typography color="secondary" size="xx-large" weight="extra-bold">
					I like to solve problems
				</Typography>
				<Typography color="secondary" size="x-large" weight="medium">
					Computer Science, Software Engineering, Competitive Programming, Chess
				</Typography>
			</div>
			<Footer />
		</div>
	);
}
