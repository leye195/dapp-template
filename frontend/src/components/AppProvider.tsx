"use client";

import { ComponentProps } from "react";
import { mainnet, polygon, polygonMumbai } from "viem/chains";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

type Props = Pick<ComponentProps<"div">, "children">;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Dapp",
      },
    }),
  ],
});

function AppProvider({ children }: Props) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}

export default AppProvider;
