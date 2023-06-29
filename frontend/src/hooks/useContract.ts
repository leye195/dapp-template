"use client";

import { useEffect, useState } from "react";
import { getContract } from "viem";
import { Address, usePublicClient, useWalletClient } from "wagmi";

type Props = {
  contractAddress: Address;
  abi: any;
  chainId: number;
};

export type ContractType = {
  read: any;
  write: any;
};

export type WriteContract = {
  functionName: string;
  params?: any[];
  onWait?: () => void;
  onError?: () => void;
  onAfter?: (tx?: Address) => void;
};

export type ReadContract = {
  functionName: string;
  params?: any[];
};

const useContract = ({ contractAddress, abi, chainId }: Props) => {
  const [isWriting, setIsWriting] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [contract, setContract] = useState<ContractType | null>(null);
  const publicClient = usePublicClient({
    chainId,
  });
  const { data: walletClient } = useWalletClient({
    chainId,
  });

  const writeContract = async ({
    onWait,
    onError,
    onAfter,
    functionName,
    params = [],
  }: WriteContract) => {
    try {
      setIsWriting(true);

      const { write } = getContract({
        address: contractAddress,
        abi,
        publicClient,
        walletClient: walletClient ?? undefined,
      });

      const tx = await write[functionName](params);

      if (onWait) onWait();

      await publicClient.waitForTransactionReceipt({
        hash: tx,
      });

      if (onAfter) onAfter(tx);
    } catch (error) {
      console.error(error);
      if (onError) onError();
    } finally {
      setIsWriting(false);
    }
  };

  const readContract = async ({ functionName, params = [] }: ReadContract) => {
    try {
      setIsReading(true);
      const { read } = getContract({
        address: contractAddress,
        abi,
        publicClient,
        walletClient: walletClient ?? undefined,
      });
      const data = await read[functionName](params);
      return data;
    } catch (err) {
      console.error(err);
      return undefined;
    } finally {
      setIsReading(false);
    }
  };

  useEffect(() => {
    if (contractAddress && abi) {
      const { read, write } = getContract({
        address: contractAddress,
        abi,
        publicClient,
        walletClient: walletClient ?? undefined,
      });

      setContract({ read, write });
    }
  }, []);

  return {
    contract,
    isWriting,
    isReading,
    writeContract,
    readContract,
  };
};

export default useContract;
