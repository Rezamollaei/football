/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.

// const golplayer = Object.entries(game.scored);
// // console.log(golplayer);

// for (const [num, pers] of golplayer)
//   console.log(`Goal ${Number(num) + 1} : ${pers}`);

// //2.
// let sum = 0;
// const clcave = Object.entries(game.odds);
// // console.log(clcave);
// for (const [j, k] of clcave) sum += k;
// console.log(sum / clcave.length);
// //3.
// const oddnumber = Object.entries(game.odds);
// // console.log(oddnumber);
// for (const [team, chance] of oddnumber) {
//   game[team]
//     ? console.log(`Odd of victory ${game[team]} : ${chance}`)
//     : console.log(`Odd of draw : ${chance}`);
// }

// //4.

// const goalnum = Object.entries(game.scored);
// console.log(goalnum);

// for (const [number, player] of goalnum) {
//   console.log(number, player);
//   for (const [item, check] of goalnum) {
//     console.log(item, check);
//   }
// }
// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk1, ...fieldplayesr1] = players1;
// const [gk2, ...fieldplayesr2] = players2;
// console.log(gk1, fieldplayesr1, gk2, fieldplayesr2);

// const allplayers = [...players1, ...players2];
// console.log(allplayers);

// const playere1final = [...players1, "Thiago", "Coutinho", "Periscic"];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printgoal = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printgoal(...game.scored);

// team1 > team2
//   ? console.log("team 1 in more likely to winn ")
//   : console.log("team 2 in more likely to winn ");

// const orderset = new Set(["pizza", "pasta", "pizza", "risotto", "pasta"]);
// console.log(orderset);
// console.log(new Set("reza"));
// console.log(orderset.size);
// console.log(orderset.has("pasta"));
// orderset.add("sushi");
// orderset.delete("risotto");
// console.log(orderset);

// let foodarr = ["pizza", "pasta", "pizza", "risotto", "pasta"];
// console.log(foodarr);
// const foodarrcom = [...new Set(foodarr)];
// console.log(foodarrcom);
// console.log(new Set(foodarr).size);
// const rest = new Map();
// rest.set("name", "classico reza");
// rest.set(1, "torino");
// rest.set(2, "milano");
// // console.log(rest.set(3, "marand"));
// rest
//   .set("catogory", ["reza", "ali", "hassan", 22])
//   .set("open", 9)
//   .set("close", 11);
// console.log(rest);
// console.log(rest.get("name"));
// console.log(rest.get(2));

// const question = new Map([
//   ["question", "what is the problem?"],
//   [1, "python"],
//   [2, "javascript"],
//   [3, "c"],
//   ["correct", "python"],
//   [true, "correct"],
//   [false, "try again"],
// ]);

// console.log(question);

// for (const [key, value] of question) console.log(key, value);

// const answer = Number(prompt("your answer: "));
// console.log(answer);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const rewrite = function (name) {
  const newname = name.toLowercase();
  console.log(name);
};
rewrite(passenger);
const passenger = "rezaA";
const passengerlower = passenger.toLowerCase();
const correctpassenger =
  passengerlower[0].toUpperCase() + passengerlower.slice(1, passenger.length);
console.log(correctpassenger);

const str = "reza go home and then go shopping";
const newstr = str.replaceAll("go", "andato");
console.log(newstr);

const capitalize = function (name) {
  const newname = name.split(" ");
  const nameupper = [];
  console.log(newname);
  for (const item of newname)
    nameupper.push(item[0].toUpperCase() + item.slice(1));
  console.log(nameupper);
};

capitalize("reza mollaei");
