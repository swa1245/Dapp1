import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const conn = useConnection();
  function requestAird() {
    const publicKey = wallet.publicKey?.toBase58();
    const amount = document.getElementById("amount").value
    conn.requestAird(publicKey, amount*LAMPORTS_PER_SOL);
  }
  return (
    <div style={{
        gap: "10px",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>
      <input
        style={{
          width: "100%",
          height: "30px",
          "font-size": "16px",
          "font-weight": "bold",
          "background-color": "#f0f0f0",
          border: "none",
          "border-radius": "5px",
          padding: "10px",
        }}
        type="text"
        id="amount"
        placeholder="Amount.."
      />
      <br />
      <button
        style={{
          "background-color": "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          "border-radius": "5px",
          margin: "10px",
        }}
        onClick={requestAird}
      >
        Request Airdrop
      </button>
      {wallet.publicKey?.toBase58()}
    </div>
  );
}
