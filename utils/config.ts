import minimist, { ParsedArgs } from "minimist";
import * as Dotenv from "dotenv";
import * as path from "path";
import logger from "./logger";
export const args: ParsedArgs = minimist(process.argv.slice(0));

const fileName = path.resolve(process.cwd());
let env = Dotenv.config({ path: fileName });

env = Dotenv.config((!!process.env.ENVFILE) ? { path: process.env.ENVFILE } : {});
if (env.error) {
  console.warn(".env load failed");
}

export const isDebuging = process.execArgv.join().includes("inspect");

const logLevel = args.logLevel || process.env.LOG_LEVEL || "trace";
logger.setLevel(logLevel);
if (!process.env.NODE_DEBUG) {
  process.env.NODE_DEBUG = "*";
}

console.log("NODE_ENV: ", process.env.NODE_ENV);
console.log("isDebugging: ", isDebuging);
console.log("logLevel: ", logLevel);
console.log("ENVFILE: ", process.env.ENVFILE);
