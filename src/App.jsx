import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirdrop } from "./RequestAirdrop";
const App = () => {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "10px",
            }}
          >
            <h1>Fosset</h1>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <br />
            <RequestAirdrop
              style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
              }}
            />
          </div>
          {/* <RequestAirdrop />
                <ShowSolBalance /> */}
          {/* <Tokens /> */}
          {/* <SignMessage />
                <SendTokens /> */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
