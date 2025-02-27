import { createViemWalletClient } from "../viem/createViemWalletClient.js";
import { ToolConfig } from "./alltools.js";

export const getWalletAddressTool: ToolConfig = {
    definition: {
        type: 'function',
        function: {
            name: 'get_wallet_address',
            description: 'get the ai bot\'s connected wallet address',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    handler: async () => {
        const walletClient = createViemWalletClient();
        return walletClient.account.address;
    }
}