//press
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var yellow = new Audio("sounds/yellow.mp3");
$(".btn").click(function (event) {
  event.target.classList.add("pressed");
  k = event.target.id;
  switch (k) {
    case "green":
      green.play();
      break;
    case "red":
      red.play();
      break;
    case "blue":
      blue.play();
      break;
    case "yellow":
      yellow.play();
      break;
    default:
      break;
  }
  setTimeout(function () {
    event.target.classList.remove("pressed");
  }, 300);
});

// start game
var level = 0;
var userclick = 0;
var cc = [];
var i;
function startgame() {
  $(document).keypress(function () {
    console.log(seq);

    levelincrease();
    seqincrease();
    $(document).unbind();
  });
}
startgame();
function levelincrease() {
  level++;
  $("h1").text("Level " + level);
}

//Next level
function nextlevel() {
  levelincrease();
  cc = [];
  userclick = -1;
    seqincrease();
    
}
// simon sequence
var colors = [".green", ".red", ".blue", ".yellow"];
var seq = [];
function seqincrease() {
  i = Math.floor(Math.random() * 4);
  seq.push(colors[i]);
  $(seq[seq.length - 1]).css("opacity", "0");
  setTimeout(function () {
    $(seq[seq.length - 1]).css("opacity", "1");
  }, 200);
    console.log(seq);
    switch (seq[seq.length - 1]) {
      case ".green":
        green.play();
        break;
      case ".red":
        red.play();
        break;
      case ".blue":
        blue.play();
        break;
      case ".yellow":
        yellow.play();
        break;
      default:
        break;
    }
}

//user sequence
$(".green").click(function () {
  cc.push(".green");
  seqcheck();
  userclick++;
});
$(".blue").click(function () {
  cc.push(".blue");
  seqcheck();
  userclick++;
});
$(".yellow").click(function () {
  cc.push(".yellow");
  seqcheck();
  userclick++;
});
$(".red").click(function () {
  cc.push(".red");
  seqcheck();
  userclick++;
});
//game over
var wrong = new Audio("sounds/wrong.mp3");
function gameover() {
  $("body").addClass("game-over");
  wrong.play();
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 300);
  $("h1").text("Game Over , Press Any Key to Restart");
  seq = [];
  cc = [];
  level = 0;
  startgame();
}

//sequence check
function seqcheck() {
  if (cc[userclick] != seq[userclick]) {
    console.log("gameover");
    gameover();
  } else if (JSON.stringify(cc) == JSON.stringify(seq)) {
      console.log("next level");
      setTimeout(10000);
    nextlevel();
  }

  console.log(cc);
}
