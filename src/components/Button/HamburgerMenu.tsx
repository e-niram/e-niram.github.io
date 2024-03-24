import styled from "@emotion/styled";
import { HamburgerMenuProps } from "./HamburgerMenu.types";
import { Colors } from "../../foundations/Colors";

export const HamburgerMenu = ({
	color,
	backgroundColor,
	fontSize = "xxx-large",
}: HamburgerMenuProps) => {
	return (
		<StyledHamburgerMenu
			backgroundColor={backgroundColor}
			color={color}
			fontSize={fontSize}
		>
			☰
		</StyledHamburgerMenu>
	);
};

const StyledHamburgerMenu = styled("button")<HamburgerMenuProps>`
	background-color: ${(props) => Colors[props.backgroundColor]};
	border: 0px;
	border-radius: 8px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	color: ${(props) => Colors[props.color]};
	cursor: pointer;
	font-size: 50px;
	height: 65px;
	width: 65px;
`;
