//Script 1
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
  }


  //script 2

  for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
  }
  

  //Script3
  const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

//Script 4
// Set Interval Timer 5s (ASYNC FUNCTION)
let timeLeft = 5;
const countDown = setInterval(() => {
console.log(`Time left is ${timeLeft}`)
timeLeft--
if (timeLeft < 0) {
  clearInterval(countDown)
  console.log(`Time's Up!`)
}
}, 1000)