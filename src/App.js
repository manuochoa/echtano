import React, { useState, useEffect } from "react";
import "./App.css";
import Router from "./components/Router";
import Theme from "./Theme";

import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

function App() {
  const [userAddress, setUserAddress] = useState("");
  const [chainId, setChainId] = useState(56);
  const [wallet, setWallet] = useState("");
  const [walletProvider, setWalletProvider] = useState("");

  const connectWalletConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          2000: "https://rpc01-sg.dogechain.dog",
        },
        infuraId: null,
      });

      await provider.enable();
      const web3 = new Web3(provider);
      setWalletProvider(provider);

      const chainId = await web3.eth.getChainId();
      const accounts = await web3.eth.getAccounts();

      setChainId(chainId);
      setUserAddress(accounts[0]);
      setWallet("WALLET_CONNECT");

      provider.on("accountsChanged", (accounts) => {
        setUserAddress(accounts[0]);
        console.log(accounts);
      });

      // Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        setChainId(chainId);
        console.log(chainId);
      });

      // Subscribe to session disconnection
      provider.on("disconnect", (code, reason) => {
        console.log(code, reason);
        setUserAddress("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connectMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      console.log(chainId, "chainId");

      let id = parseInt(chainId, 16);

      if (chainId !== "0x7d0") {
        await changeNetwork();
      }

      setChainId(id);

      setUserAddress(accounts[0]);
      setWallet("METAMASK");

      try {
        window.localStorage.setItem("userAddress", accounts[0]);
      } catch (error) {
        window.localStorage.clear();
        window.localStorage.setItem("userAddress", accounts[0]);
      }

      window.ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) => {
        let id = parseInt(_chainId, 16);
        setChainId(id);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x7d0" }],
      });
    } catch (error) {
      console.log(error);
      if (Number(error.code) === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x7d0", // A 0x-prefixed hexadecimal string
              chainName: "Dogechain Mainnet",
              nativeCurrency: {
                name: "DOGE",
                symbol: "DOGE", // 2-6 characters long
                decimals: 18,
              },
              rpcUrls: ["https://rpc01-sg.dogechain.dog"],
              blockExplorerUrls: ["https://explorer.dogechain.dog/"],
            },
          ],
        });
      }
    }
  };

  const disconnectWallet = async () => {
    if (wallet === "WALLET_CONNECT") {
      const provider = new WalletConnectProvider({
        rpc: {
          2000: "https://rpc01-sg.dogechain.dog",
        },
        infuraId: null,
      });
      await provider.disconnect();
    }

    setUserAddress("");
  };

  useEffect(() => {
    let user = localStorage.getItem("userAddress");
    if (user) {
      connectMetamask();
    }
  }, []);
  return (
    <Theme>
      <div className="App">
        <Router
          connectWalletConnect={connectWalletConnect}
          connectMetamask={connectMetamask}
          disconnectWallet={disconnectWallet}
          userAddress={userAddress}
        />
      </div>
    </Theme>
  );
}

export default App;
