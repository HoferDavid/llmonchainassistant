import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
// import { abstractTestnet } from 'viem/chains';
// import { eip712WalletActions } from 'viem/zksync'; // only for chains developed on zk stack

import { baseSepolia } from 'viem/chains';

export function createViemWalletClient() {

  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  // return createWalletClient({
  //   account,
  //   chain: abstractTestnet,
  //   transport: http(),
  // }).extend(eip712WalletActions()); // only for chains developed on zk stack

  return createWalletClient({
    account,
    chain: baseSepolia,
    transport: http(),
  });

}
