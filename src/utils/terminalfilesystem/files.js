const randomFacts = [
  "I can see the beach from my house",
  "The first digit of my bank account has not changed over the year of 2021, and I blame that to lockdown binge purchases - one of which is a robot cleaner (lifesaver)",
  "M1 Mac Mini cannot run VM, so marking SE206 was a pain",
  "I like jAZz",
  "Of the Korean singers, I like Sun Si Kyung, Kim Dong Reul, Lee Juck, Naul, Lee Seung Gi. Sorry no BTS no Blackpink",
];

export function executeFile(file) {
  const fileName = file.split("./")[1];
  return executables[fileName].executable();
}

const executables = {
  randomFact: {
    executable: randomFact,
  },
};

function randomFact() {
  return randomFacts[Math.floor(Math.random() * randomFacts.length)];
}
