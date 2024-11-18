import { Color } from "../../foundations/Colors.types";

export type ButtonProps = {
	color: Color;
	fontSize?: "large" | "x-large" | "xx-large" | "xxx-large";
	children: React.ReactElement;
};
