const files = {
  "aboutMe.txt": {
    content: `Hi there! I'm Hajin. Really glad to see you here :)
    
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

const commandNotFound =
  "Command not found. Type **help** to see available commands.";
export default function processCommand(command) {
  const splitCommand = command.split(" ");

  switch (splitCommand[0]) {
    case "ls":
      return ls();
    case "cat":
      return cat(splitCommand[1]);
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
  };
  var helpMessage = "";

  const { maxHelpTotalLength, maxKeyLength, maxUsageLength, maxHelpLength } =
    getMaxLengths(functionHelpMap);
  const horizontalBar = "_".repeat(maxHelpTotalLength + 3) + "\n";

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

function ls() {
  return Object.keys(files).join("\t");
}

function cat(file) {
  if (!file) {
    return commandNotFound;
  }
  return files[file]["content"];
}

const getMaxLengths = (map) => {
  var maxHelpTotalLength = 0;
  var maxKeyLength = 0;
  var maxUsageLength = 0;
  var maxHelpLength = 0;
  for (const key in map) {
    const help = `| ${key} | ${map[key]["usage"]} | ${map[key]["help"]} |\n`;
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
