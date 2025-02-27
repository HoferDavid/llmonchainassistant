import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { perfromRun } from "./openai/performRun";

async function main() {
    const client = new OpenAI();
    const message = "Send 0.0001 ETH to 0x000000000000000000000000000000000000000";

    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    const run = await createRun(client, thread, assistant.id);
    const result = await perfromRun(run, client, thread);

    console.log(result);
}

main();