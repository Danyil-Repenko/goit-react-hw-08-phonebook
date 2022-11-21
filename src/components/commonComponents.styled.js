import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
text-decoration: none;
appearance: none;
background-color: transparent;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-right: 20px;
  outline: none;
  padding: 5px 6px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

:hover:not(.active),
:focus-visible:not(.active) {
  color: #fff;
  background-color: #606060;
  transform: translateY(-2px);
}

&:last-child{
margin-right: 0;
}

&.active {
color: #fff;
  background-color: #000000;
  transform: translateY(0);
}`

export const Button = styled.button`
text-decoration: none;
appearance: none;
background-color: transparent;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  outline: none;
  padding: 4px;
  text-align: center;
  border: 1px solid #000000;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

:hover:not(.active),
:focus-visible:not(.active) {
  color: #fff;
  background-color: #000000;
  transform: translateY(-2px);
}`