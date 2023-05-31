import * as z from "zod";

/*
 * TYPINGS
 */

type CommandParams = {
  [id: string]: {
    name: string;
    description: string;
    schema: z.ZodType;
  };
};

// params is a Record of the param id to the value
type CommandHandler<Params extends CommandParams> = (params: {
  [id in keyof Params]: z.infer<Params[id]["schema"]>;
}) => string;

export type Command<Params extends CommandParams> = {
  name: string;
  description: string;
  params: CommandParams;
  handler: CommandHandler<Params>;
};

/*
 * API
 */

let commands: Command<any>[] = [];

export function registerCommand(command: Command<any>) {
  const idsOfParams = Object.keys(command.params);
  console.log(
    `Registering command ${command.name} with params ${idsOfParams.join(", ")}`
  );
  commands.push(command);
}

export function run() {
  console.log("Running with commands: ", commands);
}
