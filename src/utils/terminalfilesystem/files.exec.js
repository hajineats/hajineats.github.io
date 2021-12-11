const randomFacts = [
  "I can see the beach from my house",
  "M1 Mac Mini cannot run VM, so marking SE206 was a pain",
  "I like jAZz",
  "Of the Korean singers, I like Sun Si Kyung, Kim Dong Reul, Lee Juck, Naul, Lee Seung Gi",
  "Have you heard of the song 'All I need' by Jacob Collier? It gives an insight into how microtonality can be incorporated into pop musics.",
  "I can play piano and violin at Grade 8 level",
  "Robot cleaner is very nice",
  "I went for Hillary Trail for my Duke of Edinburgh Gold award, which was 80km walk over 4 nights & 5 days.",
  "Hydrating (>3L) & sugar supplement (through chocolate bars, jellies) are essential for tramping",
  "My favourite books thus far are King Lear and Macbeth",
  "I need 9~10 hours of sleep per day",
  "Samsung T7 SSD can be used to directly transfer phone media to SSD",
  "Ipad is best used for quick diagrams, and maybe Netflix too (TV is better)",
  "I have an electric guitar",
];

export function executeFile(command) {
  // expected format: ./randomFact
  const fileName = command.split("./")[1];
  if (executables[fileName]) {
    return executables[fileName].executable();
  }
  return `${fileName} is not an executable or does not exist`;
}

const executables = {
  randomFact: {
    executable: randomFact,
  },
};

var traversedRandIndex = [];
// Actually a pseudo random fact generator. Would try return unread fact
// if all the facts have been read, it will reset the cycle
function randomFact() {
  // if all the facts were traversed, reset the record
  if (traversedRandIndex.length === randomFacts.length) {
    traversedRandIndex = [];
  }
  // return unseen fact
  const genRandIndex = () => Math.floor(Math.random() * randomFacts.length);
  var randIndex = genRandIndex();
  while (traversedRandIndex.includes(randIndex)) {
    randIndex = genRandIndex();
  }
  traversedRandIndex = [...traversedRandIndex, randIndex];
  return randomFacts[randIndex];
}

// Files common methods
export function listAllExecFiles() {
  return Object.keys(executables);
}
