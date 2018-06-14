//we make 2 querySelectors to focus on the HTML part
var wrapper = document.querySelector('.wrapper');
var row1 = document.querySelector('.row1');
// we add an event 'wheel' to control le scrolling
window.addEventListener('wheel', function(event) {
  console.log(event.deltaY);
  //delta Y is the vertical scroll
  if (event.deltaY > 1) {
    row1.style.position = "absolute";
    row1.style.opacity = "0";
  } else if (event.deltaY < 1) {
    row1.style.position = "fixed";
    row1.style.opacity = "1";

  }
});