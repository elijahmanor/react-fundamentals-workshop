import styled from "styled-components";
import { darken } from "polished";

const SECTION_BG = "white";
const BUTTON_COLOR = "#95c83e";

const Button = styled.button`
  height: 30px;
  min-width: 60px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  outline: none;
  padding: 4px 15px;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
  transition: background-color 200ms ease-in-out, opacity 200ms ease-in-out,
    border-bottom 200ms ease-in-out;
  vertical-align: middle;
  background-color: ${BUTTON_COLOR};
  color: ${SECTION_BG};
  box-shadow: 0 2px ${darken(0.1, BUTTON_COLOR)};

  &:last-of-type {
    margin-right: 0;
  }

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? "0.5" : "1")};

  &:hover,
  &:focus {
    background-color: ${darken(0.1, BUTTON_COLOR)};
    box-shadow: 0 2px ${darken(0.2, BUTTON_COLOR)};
  }

  &:active {
    background-color: ${darken(0.2, BUTTON_COLOR)};
    box-shadow: 0 1px ${darken(0.3, BUTTON_COLOR)};
    transform: translateY(1px);
  }
`;

export default Button;
