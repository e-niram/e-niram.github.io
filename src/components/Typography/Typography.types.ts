import { Color } from "../../foundations/Colors.types";

export type TypographyProps = {
	color: Color;
	children: string;
	fontSize?: "large" | "x-large" | "xx-large" | "xxx-large";
};
