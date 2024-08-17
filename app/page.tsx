import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import AppBar from "./components/AppBar"
import WalletContextProvider from "./components/WalletContextProvider";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useEffect } from "react";
import { BalanceDisplay } from "./components/BalanceDisplay";
import CreateMint from "./components/CreateMint";
import CreateTokenAccount from "./components/CreateTokenAccount";
import MintTo from "./components/MintTo";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col text-left bg-gray-800">
    <WalletContextProvider>
      <AppBar />
      <div className="h-full flex flex-col items-center justify-start text-[calc(10px+2vmin)] text-white pt-12">
        <span>CUSTOM MINT FORM</span>
        <BalanceDisplay />
        <CreateMint />
        <CreateTokenAccount />
        <MintTo />
      </div>
      </WalletContextProvider>
    </div>
  );
}