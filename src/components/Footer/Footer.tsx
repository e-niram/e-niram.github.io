import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExtensionIcon from "@mui/icons-material/Extension";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

export default function Footer() {
	const onMailClick = () => {
		console.log("Sending mail...");
	};
	return (
		<div className="footerContainer">
			<LinkedInIcon className="footerIcon" />
			<GitHubIcon className="footerIcon" />
			<ExtensionIcon className="footerIcon" />
		</div>
	);
}
