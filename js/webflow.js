
var myBubble = document.querySelector(".chatbubble");

function mOver(body1){
	myBubble.innerHTML="Have a nice day! Since the weather is nice, why don't we go on a picnic in the park?",
  myBubble.style.color = "green"
}

function mOut(body1){
	myBubble.innerHTML=""
}
