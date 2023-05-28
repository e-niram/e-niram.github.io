import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExtensionIcon from "@mui/icons-material/Extension";

export default function Footer() {
	const onMailClick = () => {
		console.log("Sending mail...");
	};
	return (
		<>
			<GitHubIcon sx={{ color: "white" }} />
			<ExtensionIcon sx={{ color: "white" }} />
		</>
	);
}
