var ball;
var paddle;
var score;
var playingArea;

var aWidth;
var aHeight;
var pWidth;
var pHeight;
var dx = 2;
var dy = 2;
var pdx = 48;
var currentScore = 0;
var timer;
var paddleLeft = 228;
var ballLeft = 100;
var ballTop = 8;


window.addEventListener('load', init);

function init () {
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('palyingArea');
    document.addEventListener('keydown', keyListener, false)
    layoutPage();
}

function layoutPage() {
    aWidth = innerWidth;
    aHeight = innerHeight
    pWidth = aWidth - 22;
    pHeight = aHeight - 22;
    playingArea.style.width = pWidth + 'px';
    playingArea.style.height = pHeight + 'px'
}

function keyListener(e) {
    var key = e.keyCode
    if((key == 37 || key == 65) && paddleLeft > 0) {
        paddleLeft -= pdx;
        if(paddleLeft < 0) paddleLeft = 0;
    }

    else if((key == 39 || key == 68) && paddleLeft < pWidth - 64) {
        paddleLeft += pdx;
        if(paddleLeft > pWidth - 64) paddleLeft = pWidth - 64;
    }
    paddle.style.left = paddleLeft + 'px';


}