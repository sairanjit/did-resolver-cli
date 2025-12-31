#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("did-resolver-cli")
  .description("DID Resolver CLI")
  .version("0.0.2")
  .argument("<did>", "DID to resolve using Universal Resolver (format: did:method:specific-id)")
  .action(async (did: string) => {
    try {
      const response = await fetch(`https://dev.uniresolver.io/1.0/identifiers/${did}`)
      const responseJson = await response.json()
      console.log(JSON.stringify(responseJson, null, 2))
    } catch (error) {
      console.error("Error:", error)
      process.exit(1)
    }
  });

program.parse();
