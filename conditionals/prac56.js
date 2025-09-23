// 16. Rock-Paper-Scissors
let player = "rock", computer = "scissors";
switch (player + computer) {
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
    console.log("Player Wins!");
    break;
  case "rockpaper":
  case "paperscissors":
  case "scissorsrock":
    console.log("Computer Wins!");
    break;
  default:
    console.log("Draw!");
}
