import Flex from "@/components/Flex";
import { WalletButtons, WalletAddress } from "@/components/Wallet";

export default function Home() {
  return (
    <main>
      <Flex flexDirection="column" alignItems="center">
        <Flex width="100%" justifyContent="center">
          <h1>Dapp Template</h1>
        </Flex>
        <WalletAddress />
        <WalletButtons />
      </Flex>
    </main>
  );
}
