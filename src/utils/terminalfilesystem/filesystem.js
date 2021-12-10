import { executeFile } from "./files.exec";
import { executeCommand } from "./files.static";
import { listAllExecFiles } from "./files.exec";
import { listAllStaticFiles } from "./files.static";

export default function processCommand(command) {
  if (command.startsWith("ls")) {
    const files = [...listAllExecFiles(), ...listAllStaticFiles()];
    return files.join("\t");
  }

  // if executable
  if (command.startsWith("./")) {
    return executeFile(command);
  }
  return executeCommand(command);
}
