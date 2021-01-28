const win = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [0, 4, 8],
];
document.getElementById("play").addEventListener("click", unplur);
document.getElementById("zero").addEventListener("click", GFG_click);
document.getElementById("one").addEventListener("click", GFG_click);
document.getElementById("two").addEventListener("click", GFG_click);
document.getElementById("three").addEventListener("click", GFG_click);
document.getElementById("four").addEventListener("click", GFG_click);
document.getElementById("five").addEventListener("click", GFG_click);
document.getElementById("six").addEventListener("click", GFG_click);
document.getElementById("seven").addEventListener("click", GFG_click);
document.getElementById("eight").addEventListener("click", GFG_click);
let player_1 = [];
let player_2 = [];
let turn = 0;

function GFG_click(clicked) {
  if (document.getElementById(this.id).innerText == "" && turn == 0) {
    document.getElementById(this.id).innerText = "x";
    document.getElementById(this.id).classList = "bounce-in-top";
    document.getElementById(this.id).style = " background-color:red";
    turn = 1;
    switch (this.id) {
      case "zero":
        player_1.push(0);
        break;
      case "one":
        player_1.push(1);
        break;
      case "two":
        player_1.push(2);
        break;
      case "three":
        player_1.push(3);
        break;
      case "four":
        player_1.push(4);
        break;
      case "five":
        player_1.push(5);
        break;
      case "six":
        player_1.push(6);
        break;
      case "seven":
        player_1.push(7);
        break;
      case "eight":
        player_1.push(8);
        break;
      default:
        alert("I don't know such values");
    }
  } else if (document.getElementById(this.id).innerText == "" && turn == 1) {
    document.getElementById(this.id).innerText = "O";
    document.getElementById(this.id).classList = "bounce-in-top";
    document.getElementById(this.id).style =
      "color:red; background-color:black";
    turn = 0;
    switch (this.id) {
      case "zero":
        player_2.push(0);
        break;
      case "one":
        player_2.push(1);
        break;
      case "two":
        player_2.push(2);
        break;
      case "three":
        player_2.push(3);
        break;
      case "four":
        player_2.push(4);
        break;
      case "five":
        player_2.push(5);
        break;
      case "six":
        player_2.push(6);
        break;
      case "seven":
        player_2.push(7);
        break;
      case "eight":
        player_2.push(8);
        break;
      default:
        alert("I don't know such values");
    }
  } else {
    alert("The place is orderd ");
  }
  console.log(player_2);
  console.log(player_1);
  is_win(
    player_1.sort(function (a, b) {
      return a - b;
    }),
    player_2.sort(function (a, b) {
      return a - b;
    }),
    win
  );
}
function is_win(player_1, player_2, win) {
  let rec1 = 0;
  let rec2 = 0;
  if (player_1.length >= 3 || player_2.length >= 3) {
    for (var x = 0; x < win.length; x++) {
      rec1 = 0;
      rec2 = 0;
      for (var j = 0; j < win[x].length; j++) {
        for (var y = 0; y < player_1.length; y++) {
          if (win[x][j] == player_1[y]) {
            rec1++;
          }
          if (win[x][j] == player_2[y]) {
            rec2++;
          }
        }
      }
      if (rec1 == 3) {
        document.getElementById("winer").innerText = "player 1 Win";
        plur();
        return true;
      } else if (rec2 == 3) {
        document.getElementById("winer").innerText = "player 2 Win";
        plur();
        return true;
      } else {
      }
    }
    if (player_1.length + player_2.length == 9) {
      document.getElementById("winer").innerText = "It's Draw";
      plur();
      return true;
    }
  } else {
    return false;
  }
}

function unplur() {
  document.getElementById("blur").style.display = "none";
  document.getElementById("winer").style.display = "none";
  document.getElementById("play").style.display = "none";
  reset();
}
function plur() {
  document.getElementById("blur").style.display = "block";
  document.getElementById("winer").style.display = "block";
  document.getElementById("play").style.display = "block";
}
function reset() {
  document.getElementById("zero").innerHTML = "";
  document.getElementById("zero").style = "background-color:white";
  document.getElementById("one").innerHTML = "";
  document.getElementById("one").style = "background-color:white";
  document.getElementById("two").innerHTML = "";
  document.getElementById("two").style = "background-color:white";

  document.getElementById("three").innerHTML = "";
  document.getElementById("three").style = "background-color:white";

  document.getElementById("four").innerHTML = "";
  document.getElementById("four").style = "background-color:white";
  document.getElementById("five").innerHTML = "";
  document.getElementById("five").style = "background-color:white";
  document.getElementById("six").innerHTML = "";
  document.getElementById("six").style = "background-color:white";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("seven").style = "background-color:white";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("eight").style = "background-color:white";
  player_1 = [];
  player_2 = [];
  turn = 0;
}
