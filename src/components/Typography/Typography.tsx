import { TypographyProps } from "./Typography.types";
import { Colors } from "../../foundations/Colors";
import styled from "@emotion/styled";

export const Typography = ({
	color,
	children,
	fontSize = "large",
}: TypographyProps) => {
	return (
		<StyledTypography color={color} fontSize={fontSize}>
			{children}
		</StyledTypography>
	);
};

const StyledTypography = styled("p")<TypographyProps>`
	color: ${(props) => Colors[props.color]};
	font-family: sans-serif, Helvetica, arial;
	font-size: ${(props) => props.fontSize};
`;
