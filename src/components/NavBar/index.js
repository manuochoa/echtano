import React, { useEffect, useState } from "react";
import {
  ConnectButton,
  NavBarContainer,
  NavBarFooter,
  NavBarFooterImageContainer,
  NavBarImgContainer,
  NavBarItem,
  NavBarWrapper,
} from "./styled";
import Logo from "../Logo";
import navData from "./variables";
import arrow from "../../images/arrow-right.svg";
import goToIcon from "../../images/goToIcon.svg";
import Wallet from "../Wallet";
import { useLocation } from "react-router-dom";

export default function NavBar({
  connectWalletConnect,
  connectMetamask,
  disconnectWallet,
  userAddress,
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(!open);
  };

  return (
    <NavBarWrapper>
      {open && (
        <Wallet
          connectWalletConnect={connectWalletConnect}
          connectMetamask={connectMetamask}
          disconnectWallet={disconnectWallet}
          userAddress={userAddress}
          handleClose={(e) => handleClose(e)}
        />
      )}
      <NavBarContainer>
        <Logo />
        {!userAddress ? (
          <ConnectButton to="" onClick={handleOpen}>
            <p>Connect Wallet</p>
            <NavBarImgContainer>
              <img src={arrow} alt="" />
            </NavBarImgContainer>
          </ConnectButton>
        ) : (
          <ConnectButton to="" onClick={disconnectWallet}>
            <p>
              {userAddress.slice(0, 6)}...
              {userAddress.slice(-10)}
            </p>
            <NavBarImgContainer>
              <img src={arrow} alt="" />
            </NavBarImgContainer>
          </ConnectButton>
        )}
        {navData.map((item) => {
          return (
            <NavBarItem
              key={item.id}
              to={item.link}
              active={location.pathname === item.link}
            >
              <NavBarImgContainer>
                <img src={item.icon} alt="" />
              </NavBarImgContainer>
              <p>{item.name}</p>
            </NavBarItem>
          );
        })}
        <NavBarFooter>
          <a href="https://echtano.vercel.app/">
            Echtano.com
            <NavBarFooterImageContainer>
              <img src={goToIcon} alt="" />
            </NavBarFooterImageContainer>
          </a>
        </NavBarFooter>
      </NavBarContainer>
    </NavBarWrapper>
  );
}
