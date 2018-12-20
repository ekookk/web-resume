var ratings = document.querySelectorAll('.rating');
var nextPageButton = document.querySelector('.next-page');
nextPageButton.addEventListener('click', alertForRating)
var ratingLength = ratings.length;

var clickCount = [];
// Listen on the star click events
for(let i = 0; i < ratingLength; i++) {
  ratings[i].addEventListener('click', function(e) {
    var target = e.currentTarget;
    var attr = e.currentTarget.getAttribute('id');
    var ratingLevel = target.querySelectorAll(".active").length;
    clickCount.indexOf(attr) < 0 && ratingLevel === 5 ? clickCount.push(attr) : undefined;

    if(clickCount.length === ratingLength) {
      nextPageButton.removeEventListener('click', alertForRating)
      nextPageButton.href='body2.html'
    }
  })
}

function alertForRating() {
  alert('woops it is wrong,try again!')
}
