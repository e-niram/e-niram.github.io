import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

export default function Contact() {
	const onMailClick = () => {
		console.log("Sending mail...");
	};
	return (
		<div className="contactContainer">
			<div className="mailContainer">
				<p className="textPrimary">Send me an email</p>
				<MailIcon className="icon" onClick={onMailClick} />
			</div>
			<div className="fastLaneContainer">
				<p className="textSecondary">Or take the fast-lane</p>
				<FastForwardIcon className="icon" />
			</div>
			<Footer />
		</div>
	);
}
