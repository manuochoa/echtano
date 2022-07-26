import React from "react";
import {
  CrossIconContainer,
  UserWallet,
  UserWalletContainer,
  UserWalletImageContainer,
  UserWalletsList,
  WalletContainer,
  WalletTextContainer,
  WalletWrapper,
} from "./styled";
import Modal from "../Modal";
import { userWallets } from "./variables";
import crossImage from "../../images/cross-circle.svg";

export default function Wallet({
  handleClose,
  connectWalletConnect,
  connectMetamask,
  disconnectWallet,
  userAddress,
}) {
  const handleClick = async (name) => {
    switch (name) {
      case "MetaMask":
        connectMetamask();
        break;
      case "WalletConnect":
        connectWalletConnect();
        break;

      default:
        break;
    }
  };

  return (
    <Modal handleCloseMenu={(e) => handleClose(e)}>
      <WalletWrapper>
        <WalletContainer>
          <CrossIconContainer onClick={(e) => handleClose(e)}>
            <img src={crossImage} alt="" />
          </CrossIconContainer>
          <WalletTextContainer>
            <h1>Sellect a Wallet</h1>
            <p>
              By connecting your wallet, you agree to our&nbsp;
              <a href="">Terms of Service</a>&nbsp;and our{" "}
              <a href="">Privacy Policy</a>.
            </p>
          </WalletTextContainer>
          <UserWalletsList>
            {userWallets.map((wall) => {
              return (
                <UserWallet
                  onClick={() => handleClick(wall.name)}
                  key={wall.id}
                >
                  <UserWalletContainer>
                    <UserWalletImageContainer>
                      <img src={wall.icon} alt="" />
                    </UserWalletImageContainer>
                    <p>{wall.name}</p>
                  </UserWalletContainer>
                  <p>Connect</p>
                </UserWallet>
              );
            })}
          </UserWalletsList>
        </WalletContainer>
      </WalletWrapper>
    </Modal>
  );
}
