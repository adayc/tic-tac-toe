/* window.onload=function(){
 var board=document.querySelector('.board-js');
 board.addEventListener('click',function(event){
    event.target.style.backgroundColor='red';
});
 board.addEventListener('dblclick',function(event){
    event.target.style.backgroundColor='blue';
});
 board.addEventListener('mouseover',function(event){
     event.target.style.backgroundColor='yellow';
 });
};
*/
document.getElementById('restart').addEventListener('click', reset);

window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addX);
};

var centinel = true;
function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) {
      event.target.textContent = 'X';
      centinel = false;
    } else {
      event.target.textContent = 'O';
      centinel = true;
    }
  }
};


function reset() {
  window.location.reload();
}