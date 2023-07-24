"use client";

import useWallet from "@/hooks/useWallet";

import Button from "@/components/Button";
import Flex from "@/components/Flex";

export default function Home() {
  const { address, isConnected, connectors, connect, disconnect } = useWallet();

  return (
    <main>
      <Flex flexDirection="column" alignItems="center">
        <Flex width="100%" justifyContent="center">
          <h1>Dapp Template</h1>
        </Flex>
        {isConnected && <p>{address}</p>}
        <Flex flexDirection="column" alignItems="center" gap="8px">
          {!isConnected ? (
            <>
              {connectors.map((connector) => (
                <Button
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  Connect {connector.name}
                </Button>
              ))}
            </>
          ) : (
            <Button onClick={() => disconnect()}>Disconnect</Button>
          )}
        </Flex>
      </Flex>
    </main>
  );
}
