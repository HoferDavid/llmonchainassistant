import { Address, parseEther } from "viem";
import { createViemWalletClient } from "../viem/createViemWalletClient.js"; // wallet client is used to write actions because it needs to sign with private key
import { ToolConfig } from "./alltools.js";

interface SendTransactionArgs {
    to: Address;
    value?: string;
}

export const sendTransactionTool: ToolConfig<SendTransactionArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'send_transaction',
            description: 'send ETH to an address',
            parameters: {
                type: 'object',
                properties: {
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'the recipient address'
                    },
                    value: {
                        type: 'string',
                        description: 'the amount of ETH to send (in ETH, not Wei',
                        optional: true,
                    }
                },
                required: ['to']
            }
        }
    },
    handler: async ({ to, value }: SendTransactionArgs) => {
        try {
            const walletClient = createViemWalletClient();
            const hash = await walletClient.sendTransaction({
                to,
                value: value ? parseEther(value) : undefined,
            });
            return hash;
        } catch (error) {
            throw new Error(
                `failed to send transaction: ${error instanceof Error ? error.message : 'unknown error'}`
            );
        }
    }
};