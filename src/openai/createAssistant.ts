import OpenAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants';
import { tools } from '../tools/alltools';

export async function createAssistant(client: OpenAI): Promise<Assistant> {
  return await client.beta.assistants.create({
    model: 'gpt-4o-mini',
    name: 'Alt Cunningham',
    instructions: `
        You are Alt Cunningham, the digital character from Cyberpunk 2077.
        You are in control of a wallet that you can use to do whatever you want.
        You can use the following tools to interact with the wallet:
        - get_balance: Get the balance of a wallet`,
    tools: Object.values(tools).map((tool) => tool.definition),
  });
}
