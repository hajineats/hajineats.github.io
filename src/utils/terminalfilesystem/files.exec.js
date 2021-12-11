const randomFacts = [
  "I can see the beach from my house",
  "M1 Mac Mini cannot run VM, so marking SE206 was a pain",
  "I like jAZz",
  "Of the Korean singers, I like Sun Si Kyung, Kim Dong Reul, Lee Juck, Naul, Lee Seung Gi. Sorry no BTS no Blackpink",
  "Have you heard of the song 'All I need' by Jacob Collier? It gives an insight into how microtonality can be incorporated into pop musics.",
  "In Year 13, I found King Lear to carry a very profound lesson. On the surface, it seems to suggest that falling into sweet words and turning away from the truth leads to self-destruction. But it makes you wonder if telling the truth was necessary - especailly if it would have worked for peaceful denouement of Lear's life. It's quite complex.",
  "I can play piano and violin at Grade 8 level",
  "Robot cleaner is very nice - I recommend Roborock S7",
  "I went for Hillary Trail for my Duke of Edinburgh Gold award, which was 80km walk over 4 nights & 5 days. Hydrating & sugar supplement (through chocolate bars, jellies) are essential. You would usually walk from 8 to 3 ish, and it gets quite dark even from early afternoon at a mountain.",
];

export function executeFile(command) {
  // expected format: ./randomFact
  const fileName = command.split("./")[1];
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

// Files common methods
export function listAllExecFiles() {
  return Object.keys(executables);
}
