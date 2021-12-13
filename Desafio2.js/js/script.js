var cep = document.querySelector("#cep");
var rua = document.querySelector("#logradouro");
var bairro = document.querySelector("#bairro");
var cidade = document.querySelector("#cidade");
var estado = document.querySelector("#estado");

cep.value = "json";


cep.addEventListener("blur", function(e) {
    let cep = e.target.value;
    let script = document.createElement("script");
    script.src = "viacep.com.br/ws/01001000/json/";
    document.body.appendChild(script);

});

function json(resposta) {
    if ("erro" in resposta) {
        alert("CEP não encontrado");
        return;
    }
    console.log(resposta);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.cidade;
    estado.value = resposta.uf;
}