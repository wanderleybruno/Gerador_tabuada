/*
var nome = prompt("Como gostaria e ser chamado ?")
alert("Bem vindo, " + nome + " !")
*/
function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuadaHTML = "";

    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      var linhaTabuada = document.createElement("div");
      linhaTabuada.textContent = numero + " x " + i + " = " + resultado;
      linhaTabuada.classList.add("tabuada-item");
      linhaTabuada.style.backgroundColor = "green";
      linhaTabuada.style.marginTop = "5px";
      linhaTabuada.style.fontSize = "1.8em"
      linhaTabuada.style.textAlign = "center"
      linhaTabuada.style.width = "auto"
      
      document.getElementById("tabuada").appendChild(linhaTabuada);
      var tabuadaToda = document.createElement("div")
      
    }
  }