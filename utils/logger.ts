import * as path from "path";
import * as fs from "fs";
import { isBuffer, debuglog } from "util";

export type LogLevel = "trace" | "info" | "warn" | "error" | "critical";

export class Logger {

  private logger: (msg: string, ...params: any[]) => void;
  private level: LogLevel = "trace";
  private levels: LogLevel[] = ["trace", "info", "warn", "error", "critical"];

  constructor(module: string) {
    this.logger = debuglog(module);
  }

  setLevel = (level: LogLevel) => {
    this.level = level;
  }

  trace = (...params: any[]) => {
    if ("trace" === this.level) {
      this.logger("[TRACE]", ...params);
    }
  }

  info = (...params: any[]) => {
    if (this.levels.indexOf(this.level) <= 1) {
      this.logger("[INFO]", ...params);
    }
  }

  warn = (...params: any[]) => {
    if (this.levels.indexOf(this.level) <= 2) {
      this.logger("[WARN]", ...params);
    }
  }

  error = (...params: any[]) => {
    if (this.levels.indexOf(this.level) <= 3) {
      this.logger("[ERROR]", ...params);
    }
  }

  critical = (...params: any[]) => {
    if (this.levels.indexOf(this.level) <= 4) {
      this.logger("[CRITICAL]", ...params);
    }
  }

}

let name = "unknown";
const p = path.resolve(process.cwd(), "./package.json");
try {
  const buf = fs.readFileSync(p);
  if (buf && isBuffer(buf)) {
    const pkg = JSON.parse(buf.toString());
    if (pkg && pkg.name) {
      name = String(pkg.name);
    }
  }
} catch (e) {
  console.error(e);
}

const logger = new Logger(`@${name}`);
export default logger;

export function getLogger(logName = "") {
    return (!!logName) ? new Logger(`@${logName}`) : logger;
}
