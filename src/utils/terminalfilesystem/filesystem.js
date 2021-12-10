import { executeFile } from "./files.exec";
import { executeCommand } from "./files.static";
import { listAllExecFiles } from "./files.exec";
import { listAllStaticFiles } from "./files.static";

export default function processCommand(command) {
  if (command.startsWith("ls")) {
    const boldifiedFiles = listAllExecFiles().map((e) => `**${e}**`);

    const files = [...boldifiedFiles, ...listAllStaticFiles()].sort(
      (a, b) => a - b
    );
    return files.join("\t");
  }

  // if executable
  if (command.startsWith("./")) {
    return executeFile(command);
  }

  // check if second argument (filename) is executable,
  // which is invalid for 'cat filename' etc
  const secondArg = command.split(" ")[1];
  const isExecutable = listAllExecFiles().filter((e) => e === secondArg);
  if (isExecutable.length !== 0) {
    return `${command.split(" ")[1]} is an executable. Run it with ./ prefix`;
  }
  return executeCommand(command);
}

export function fileArray() {
  return [...listAllExecFiles(), ...listAllStaticFiles()];
}
