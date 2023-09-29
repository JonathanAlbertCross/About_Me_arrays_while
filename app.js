let = userPoints = 0;
let = userAttempt = 6;

alert("Welcome to my guessing game");

let = user = prompt("What is your name?");

while (!user) {
  user = prompt("You need to tell me bro!");
}

if (user === "Jonathan") {
  alert("Best name ever!");
}

alert(
  "Ok, enough nonsense " + user + "- on with the show.",
  "Press ok to continue!"
);

let favAuthors = [
  "Albert Camus",
  "Virginia Woolf",
  "Fyodor Dostoevsky",
  "James Joyce",
  "Johann Wolfgang von Goethe",
  "Thomas Mann",
  "Franz Kafka",
  "Bernhard Schlink",
  "Hermann Hesse",
  "Denis Diderot",
];

let authorAns = prompt(
  "Can you name me, for 1 point, one of Jonathan's favourite authors?",
  "Albert Camus?, Thomas Mann?, or Robert Musil?"
);

for (let i = 0; i < favAuthors.length; i++) {
  console.log("checking");
  if (authorAns === favAuthors[i]) {
    alert("Correct!");
    userPoints++;
    console.log("found");
  }
}

let authorAnsOne = prompt(
  "Name me a Russian author from this list",
  "Virginia Woolf?",
  "Franz Kafka?",
  "Fyodor Dostoevsky?"
);

for (let i = 0; i < favAuthors.length; i++) {
  console.log("checking");
  while (authorAnsOne === favAuthors[2]) {
    alert("Correct!");
    userPoints++;
    console.log("found");
  }
}

document.write("<br>" + "<br>");
document.write("Well done, you got " + userPoints + "/5 points");

let guessNumber = 5;
let guessAttempt = 4;

let guessAns = prompt("Can you guess the number?");

while (guessAttempt < 4) {
  guessAttempt--;
  if (guessAns < guessNumber) {
    alert("Too low");
  } else if (guessAns > guessNumber) {
    alert("Too high!");
  } else if (guessAns == guessNumber) {
    alert("That's correct!");
  }
}
