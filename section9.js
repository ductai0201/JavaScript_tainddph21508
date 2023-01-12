"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],

    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "3:1",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Jan 29th, 2022",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(`gk is: ${gk} - fieldPlayers are: ${fieldPlayers}`);

//3
const allPlayers = game.players;
console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5
const {
  odds: { team1, draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = (...playersGoal) => {
  console.log(`Có ${playersGoal.length} cầu thủ ghi bàn là: ${playersGoal}`);
};

printGoals('Davies','Muller','Lewandowski','Kimmich')
printGoals(...game.scored);

//7

team1 < team2 && console.log(`${game.team1} win`);
team2 < team1 && console.log(`${game.team2} win`);


/* 1.2 */

//1

for (const[i,players] of game.scored.entries() )
console.log(`Goal ${i+1}: ${players}`)

//2
const odds = Object.values(game.odds);
// console.log(odds)
let average = 0;
for(const odd of odds ) average += odd;
average /= odds.length;
console.log(average);

//3 
for(const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'draw' ? `draw` : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}




