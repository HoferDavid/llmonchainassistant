import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";

async function main() {
    const client = new OpenAI();
    const message = "hello alt cunningham!"

    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);

    console.log('hello world');
}

main();