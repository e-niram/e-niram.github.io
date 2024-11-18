import styled from "@emotion/styled";
import { HamburgerMenuProps } from "./HamburgerMenu.types";
import { Colors } from "../../foundations/Colors";
import { ButtonProps } from "./Button.types";

export const Button = ({ color, children }: ButtonProps) => {
	return <StyledButton color={color}>{children}</StyledButton>;
};

const StyledButton = styled("button")<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => Colors[props.color]};
	border: 0px;
	border-radius: 8px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	text-align: center;
	height: 60px;
	width: 120px;

	:hover {
		background-color: red;
	}

	:active {
		background-color: blue;
	}
`;
