// Função Inserir
function inserir(num) {
  let display = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = display + num;
}

// Função Deletar
function deletar() {
  document.getElementById("result").innerHTML = "";
}

// Função Apagar
function apagar() {
  let display = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = display.substring(
    0,
    display.length - 1
  );
}

// Função Calcular
function calcular() {
  let display = document.getElementById("result").innerHTML;

  if (display) {
    document.getElementById("result").innerHTML = eval(display);
  } else {
    document.getElementById("result").innerHTML = "inválido";
  }
}
