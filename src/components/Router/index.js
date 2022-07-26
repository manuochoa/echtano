import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes from "./variables";
import Layout from "../Layout";

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
          }
        >
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.route}
                element={route.component}
                exact
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
