import { z } from "zod";
import { registerCommand, type Command, run } from "../src/index.js";

const greetParams = {
  name: {
    name: "Name",
    description: "The name of the person to greet",
    schema: z.string(),
  },
};

const greetCommand: Command<typeof greetParams> = {
  name: "greet",
  description: "Greet someone",
  params: greetParams,
  handler: ({ name }) => {
    return `Hello ${name}!`;
  },
};

registerCommand(greetCommand);

run();
