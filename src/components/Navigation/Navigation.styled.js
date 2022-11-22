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

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 20px;
margin-bottom: 20px;
border-bottom: 1px solid #000000;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;`
