import { Color } from "../../foundations/Colors.types";

export type TypographyProps = {
	color: Color;
	children: string;
	size?: "large" | "x-large" | "xx-large" | "xxx-large";
	weight?: "regular" | "medium" | "semi-bold" | "bold" | "extra-bold" | "black";
};
