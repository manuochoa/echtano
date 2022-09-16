import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../../pages/Dashboard";
import Account from "../../pages/Account";
import Calculator from "../../pages/Calculator";
import Swap from "../../pages/Swap";

export default function Router({
  connectWalletConnect,
  connectMetamask,
  disconnectWallet,
  userAddress,
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              connectWalletConnect={connectWalletConnect}
              connectMetamask={connectMetamask}
              disconnectWallet={disconnectWallet}
              userAddress={userAddress}
            />
          }>
          <Route
            path="/"
            element={<Dashboard />}
            exact
            userAddress={userAddress}
          />
          <Route
            path="/account"
            element={<Account userAddress={userAddress} />}
            exact
            userAddress={userAddress}
          />
          <Route
            path="/calculator"
            element={<Calculator />}
            exact
            userAddress={userAddress}
          />
          <Route
            path="/swap"
            element={<Swap />}
            exact
            userAddress={userAddress}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
