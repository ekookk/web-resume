
var myBubble = document.querySelector(".chatbubble");

function mOver(body1){
	myBubble.innerHTML="Click if you want to know about me!",
  myBubble.style.color = "red"
	myBubble.style.backgroundColor = "yellow";
}

function mOut(body1){
	myBubble.innerHTML=""
}

function tz(){
    window.location.href='body1.html';
}

window.onload = function(){
 var star = document.getElementById("star");
 var star_li = star.getElementsByTagName("li");
 var star_word = document.getElementById("star_word");
 var result = document.getElementById("result");
 var i=0;
 var j=0;
 var len = star_li.length;
 var word = ['1','2','3',"4","5"]
 for(i=0; i<len; i++){
 star_li[i].index = i;
 star_li[i].onmouseover = function(){
  star_word.style.display = "block";
  star_word.innerHTML = word[this.index];
  for(i=0; i<=this.index; i++){
   star_li[i].className = "act";
  }
 }
 star_li[i].onmouseout = function(){
  star_word.style.display = "none";
  for(i=0; i<len; i++){
   star_li[i].className = "";
  }
 }
 star_li[i].onclick = function(){
  result.innerHTML = (this.index+1)+"star";
 }
 }
}
