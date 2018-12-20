
var myBubble = document.querySelector(".chatbubble");

function mOver(body1){
	myBubble.innerHTML="You found it! Click if you want to know about me!",
  myBubble.style.color = "red"
	myBubble.style.backgroundColor = "yellow";
}

function mOut(body1){
	myBubble.innerHTML=""
}

function tz(){
    window.location.href='body1.html';
}

// function ok(){
//     window.location.href='body2.html';
// }

function he(){
    window.location.href='index.html';
}



document.querySelector('#rating').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating1').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating2').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating3').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating4').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating5').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});

document.querySelector('#rating6').addEventListener('click', function (e) {
    let action = 'add';
    for (const span of this.children) {
        span.classList[action]('active');
        if (span === e.target) action = 'remove';
    }
});
