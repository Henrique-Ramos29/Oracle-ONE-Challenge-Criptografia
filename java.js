


var inputTexto = document.querySelector(".input");
inputTexto.focus();
var outInput = document.querySelector("#outInput");

function btnEncritar() {
    var texto = inputTexto.value;
    console.log("clicou")

    var resultCripto = texto.replace
    (/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    document.getElementById('outInput').innerHTML = '<textarea readonly id="outInput-texto">' + resultCripto + 
    '</textarea>';
  // document.getElementById('outInput').innerHTML = "<input type='text' id='outInput-texto' value="+ resultCripto + ">"

}

function btnDesencriptar() {
    
    var texto = inputTexto.value;

    var resultDescripto = texto.replace
    (/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('outInput').innerHTML = '<textarea readonly id="outInput-texto">' + resultDescripto + 
    '</textarea>';

}

function copiar() {
    
    var textoCop = document.getElementById("outInput-texto");
    textoCop.select(outInput);
    document.execCommand('copy');
    alert('texto copiado')

    
}

