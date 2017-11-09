
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
    alert('Paso x mayor a 5');
    win();
  }
};

// Declaramos la función win 
function win() {
  // Declaramos todas las posibles situaciones en la que ganaria X
  if ((c1.textContent === 'X' && c2.textContent === 'X' && c3.textContent === 'X') ||
	 (c4.textContent === 'X' && c5.textContent === 'X' && c6.textContent === 'X') ||
	 (c7.textContent === 'X' && c8.textContent === 'X' && c9.textContent === 'X') ||
	 (c1.textContent === 'X' && c4.textContent === 'X' && c7.textContent === 'X') ||
     (c2.textContent === 'X' && c5.textContent === 'X' && c8.textContent === 'X') ||
     (c3.textContent === 'X' && c6.textContent === 'X' && c9.textContent === 'X') ||
     (c1.textContent === 'X' && c5.textContent === 'X' && c9.textContent === 'X') ||
     (c3.textContent === 'X' && c5.textContent === 'X' && c7.textContent === 'X')) {
	 document.getElementById('result').innerHTML = 'Ganador: X ';
	 count = 10;
    winner = true;
    // Declaramos todas las posibles situaciones en la que ganaria O
  } else if ((c1.textContent === 'O' && c2.textContent === 'O' && c3.textContent === 'O') ||
	 (c4.textContent === 'O' && c5.textContent === 'O' && c6.textContent === 'O') ||
	 (c7.textContent === 'O' && c8.textContent === 'O' && c9.textContent === 'O') ||
	 (c1.textContent === 'O' && c4.textContent === 'O' && c7.textContent === 'O') ||
     (c2.textContent === 'O' && c5.textContent === 'O' && c8.textContent === 'O') ||
     (c3.textContent === 'O' && c6.textContent === 'O' && c9.textContent === 'O') ||
     (c1.textContent === 'O' && c5.textContent === 'O' && c9.textContent === 'O') ||
     (c.textContent3 === 'O' && c5.textContent === 'O' && c7.textContent === 'O')) {
    document.getElementById('result').innerHTML = 'Ganador: O ';
    count = 10;
    winner = true;
  } else {
    document.getElementById('result').innerHTML = 'EMPATE!!! ';
  }
}


function reset() {
  window.location.reload();
}