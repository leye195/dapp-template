import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  usePublicClient,
} from "wagmi";

function useWallet() {
  const {
    address,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
    connector,
  } = useAccount();
  const { connect, connectors, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const publicClient = usePublicClient();
  const { chain } = useNetwork();

  return {
    address,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
    connector,
    connectors,
    chain,
    pendingConnector,
    publicClient,
    connect,
    disconnect,
  };
}

export default useWallet;
