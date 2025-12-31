#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("did-resolver-cli")
  .description("DID Resolver CLI")
  .version("0.0.1")
  .argument("<name>", "Name to print")
  .action((name: string) => {
    console.log(name);
  });

program.parse();
