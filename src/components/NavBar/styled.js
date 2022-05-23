import styled from "styled-components";
import Container from "../Container";
import {Link} from "react-router-dom";

export const NavBarWrapper = styled.nav`
  width: 100%;
  max-width: 260px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.secondaryBlack};
  color: ${({theme}) => theme.colors.white};
  padding: 0 20px;
  position: relative;
`

export const NavBarContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NavBarItem = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background: transparent;
  border-radius: 100px;
  padding: 15px 0;
  transition: all 0.3s;
  &:hover {
    background: ${({theme}) => theme.colors.purple};
  }
`

export const NavBarImgContainer = styled.div`
  width: 100%;
  max-width: 20px;
  margin: 0 15px;
  & > img {
    width: 100%;
  }
`

export const ConnectButton = styled(NavBarItem)`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-weight: 700;
  margin: 20px 0;
  justify-content: space-between;
  p {
    margin: 0 20px;
  }
  &:hover {
    background: ${({theme}) => theme.colors.white};
  }
`

export const Footer = styled.footer`
  width: 100%;
  max-width: 260px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.29);
  background-color: ${({theme}) => theme.colors.secondaryBlack};
  a {
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.colors.white};
  }
`

export const FooterImageContainer = styled.div`
  width: 100%;
  max-width: 17px;
  margin: 0 10px;
`