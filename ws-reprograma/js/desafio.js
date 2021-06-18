var valorHora = document.getElementById("valor-hora");
var horasProjeto = document.getElementById("horas-projeto")
var resultado = document.getElementById("resposta")

function calcular(){
    var totalProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2)
    resultado.innerText = "R$ " + totalProjeto
}
