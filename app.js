function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 182; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

var hitrn = 0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn; 
}

var timer = 60;
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

// Event listener for clicking bubbles
document.querySelector('#pbtm').addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

// Start the game
runTimer();
makeBubble();
getNewHit();
