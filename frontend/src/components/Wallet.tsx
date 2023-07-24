"use client";

import useWallet from "@/hooks/useWallet";
import Flex from "@/components/Flex";
import Button from "@/components/Button";

type WalletId = "metaMask" | "coinbaseWallet";

const walletName = {
  metaMask: "Metamask",
  coinbaseWallet: "Coinbase",
};

export const WalletButtons = () => {
  const { isConnected, connectors, connect, disconnect } = useWallet();

  return (
    <Flex flexDirection="column" alignItems="center" gap="8px">
      {!isConnected ? (
        <>
          {connectors.map((connector) => (
            <Button
              key={connector.id}
              onClick={() => connect({ connector })}
              minWidth="250px"
            >
              Connect {walletName[connector.id as WalletId]}
            </Button>
          ))}
        </>
      ) : (
        <Button onClick={() => disconnect()}>Disconnect</Button>
      )}
    </Flex>
  );
};

export const WalletAddress = () => {
  const { address, isConnected } = useWallet();

  return isConnected ? <p>{address}</p> : null;
};
