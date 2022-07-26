import React from "react";
import { Content, LayoutWrapper } from "./styled";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function Layout({
  connectWalletConnect,
  connectMetamask,
  disconnectWallet,
  userAddress,
}) {
  return (
    <LayoutWrapper>
      <NavBar
        connectWalletConnect={connectWalletConnect}
        connectMetamask={connectMetamask}
        disconnectWallet={disconnectWallet}
        userAddress={userAddress}
      />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutWrapper>
  );
}
