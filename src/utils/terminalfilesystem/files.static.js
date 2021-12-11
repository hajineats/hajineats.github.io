const commandNotFound =
  "Command not found. Type **help** to see available commands.";

const files = {
  "aboutMe.txt": {
    content: `
Hi there! I'm Hajin. Really glad to see you here :)
      
I'm a final year SE student seeking for a graduate role for 2022 year-end. 
      
I have working knowledge and practical experiences in MERN, Java and Objective C. 
  
Interested in good software design, TDD, Agile. Love leaving a record of what I learn (optimizemarginality.tistory.com/), and sharing it with others. Tramping/travelling is my annual ritual.`,
  },
  "skills.txt": {
    content:
      "**> familiar**: Java, Javascript/React, Python, git, JPA Hibernate\n" +
      "**= familiar**: C, Objective-C, Android, html/css, bash, JAX-RS\n" +
      "**< familiar**: AWS EC2, MATLAB",
  },
};

export function executeCommand(command) {
  // expected format: cat file
  const splitCommand = command.split(" ");
  const executable = splitCommand[0];
  const firstArg = splitCommand[1];

  switch (executable) {
    case "cat":
      return cat(firstArg);
    case "help":
      return help();
    default:
      return commandNotFound;
  }
}

function help() {
  const functionHelpMap = {
    command: {
      usage: "usage",
      help: "help",
    },
    ls: {
      usage: "ls <filename>",
      help: "Displays files in the folder",
    },
    cat: {
      usage: "cat <filename>",
      help: "Displays content of the file",
    },
    clear: {
      usage: "clear",
      help: "Clears the console",
    },
    ">etc1": {
      usage: "./<executable>",
      help: "Executes an executable",
    },
    ">etc2": {
      usage: "press tab",
      help: "tab autocompletes filename",
    },
  };
  var helpMessage = "";

  const { maxHelpTotalLength, maxKeyLength, maxUsageLength, maxHelpLength } =
    getMaxLengths(functionHelpMap);
  const horizontalBar = "_".repeat(maxHelpTotalLength + 8) + "\n";

  helpMessage += horizontalBar;

  for (const key in functionHelpMap) {
    var indivHelp = `| ${appendWhiteSpace(
      key,
      maxKeyLength
    )} | ${appendWhiteSpace(
      functionHelpMap[key]["usage"],
      maxUsageLength
    )} | ${appendWhiteSpace(functionHelpMap[key]["help"], maxHelpLength)} | \n`;
    helpMessage += indivHelp;
  }
  helpMessage += horizontalBar;
  return helpMessage;
}

// Fills space until the string reaches total length
function appendWhiteSpace(str, totalLength) {
  var result = str;
  while (result.length < totalLength) {
    result += " ";
  }
  return result;
}

function cat(file) {
  if (!file) {
    return commandNotFound;
  }
  if (!files[file]) {
    return (
      "Cannot find the file called " + file + ". Type **ls** to list files."
    );
  }
  return files[file]["content"];
}

const getMaxLengths = (map) => {
  var maxHelpTotalLength = 0;
  var maxKeyLength = 0;
  var maxUsageLength = 0;
  var maxHelpLength = 0;
  for (const key in map) {
    const help = `|${key}|${map[key]["usage"]}|${map[key]["help"]}|\n`;
    maxHelpTotalLength = Math.max(help.length, maxHelpTotalLength);

    maxKeyLength = Math.max(key.length, maxKeyLength);
    maxUsageLength = Math.max(map[key]["usage"].length, maxUsageLength);
    maxHelpLength = Math.max(map[key]["help"].length, maxHelpLength);
  }
  return {
    maxHelpTotalLength,
    maxKeyLength,
    maxUsageLength,
    maxHelpLength,
  };
};

// Files common methods
export function listAllStaticFiles() {
  return Object.keys(files);
}
