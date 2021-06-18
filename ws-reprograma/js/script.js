var ganhoMes = document.getElementById("ganho-mes")
var horasDia = document.getElementById("horas-dia")
var resposta = document.getElementById("resposta")

// para comentar ctrl + ;

function calcularValorHora(){
    var totalHorasMes = horasDia.valueAsNumber * 22
    console.log(totalHorasMes)

    var valorHora = (ganhoMes.valueAsNumber/totalHorasMes).toFixed(2)
    console.log(valorHora)

    resposta.innerText = "R$ " + valorHora
}
