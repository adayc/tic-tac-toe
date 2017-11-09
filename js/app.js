
// Declaración de variables
var board = document.querySelector('.board-js');
var centinel = true;
var position;
var count = 0;
var winner = false;
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');


// Declaramos las funciones en el momento en que se carga la ventana del navegador
window.onload = function() {
  board.addEventListener('click', addX);
  document.getElementById('restart').addEventListener('click', reset);
};


function addX(event) {
  // Colocamos la 'X' u 'O' de acuerdo al turno
  if (event.target.matches('td') && event.target.textContent === '') {
    position = event.target.id.charAt(1);
    if (centinel) {
      event.target.textContent = 'X';
      centinel = false;
      count++;
      alert(count);
    } else {
      event.target.textContent = 'O';
      centinel = true;
      count++;
      alert(count);
    }
  }

  // llamando  a la funcion  win, en el mejor de los casos se gana con cinco jugadas y en el peor de los casos con 9
  if (count >= 5 && count <= 9) {
    // win();
  }

  if (count >= 9 && winner === false) {
    document.getElementById('winner').innerHTML = 'EMPATE!!! ';
    count = 1000;
  }
};

function win(){
	if ((c1=="X" && c2=="X" && c3=="X") ||
	 (c4=="X" && c5=="X" && c6=="X") ||
	 (c7=="X" && c8=="X" && c9=="X") ||
	 (c1=="X" && c4=="X" && c7=="X") ||
     (c2=="X" && c5=="X" && c8=="X") ||
     (c3=="X" && c6=="X" && c9=="X") ||
     (c1=="X" && c5=="X" && c9=="X") ||
     (c3=="X" && c5=="X" && c7=="X")) {
		juga.innerHTML="Ganador: " +jugador1+"!!!";
		cont = 1000;
		turno = 3;
		gana = true;
		
	}
	else if((c1=="O" && c2=="O" && c3=="O") ||
	 (c4=="O" && c5=="O" && c6=="O") ||
	 (c7=="O" && c8=="O" && c9=="O") ||
	 (c1=="O" && c4=="O" && c7=="O") ||
     (c2=="O" && c5=="O" && c8=="O") ||
     (c3=="O" && c6=="O" && c9=="O") ||
     (c1=="O" && c5=="O" && c9=="O") ||
     (c3=="O" && c5=="O" && c7=="O")) {
		juga.innerHTML="Ganador: " +jugador2+"!!!";
		cont = 1000;
		turno = 3;
		gana = true;
	}
	if (c1=="X" && c2=="X" && c3=="X"){
			c1.style.background=gato;
			c2.style.background=gato;
			c3.style.background=gato;
		}
}



function reset() {
  window.location.reload();
}