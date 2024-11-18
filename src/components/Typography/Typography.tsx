import { TypographyProps } from "./Typography.types";
import { Colors } from "../../foundations/Colors";
import styled from "@emotion/styled";
import { Weights } from "../../foundations/Fonts";

export const Typography = ({
	color,
	children,
	size = "large",
	weight,
}: TypographyProps) => {
	return (
		<StyledTypography color={color} size={size} weight={weight}>
			{children}
		</StyledTypography>
	);
};

const StyledTypography = styled("p")<TypographyProps>`
	color: ${(props) => Colors[props.color]};
	font-family: sans-serif, Helvetica, arial;
	font-size: ${(props) => props.size};
	font-weight: ${(props) => Weights[props.weight ?? "regular"]};
`;
