window.onload = function() {

    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let item in produtos) {
            mostrarProdutoCliente.innerHTML += "<li class= itemPr  data-preco=${Produtos[item].preco}>${Produtos[item].descricao}"
        }
    })(produtos);

}
const itemPr = document.querySelectorAll("#produtos > li.itemPr");
const cestaClienteconst = document.querySelector("ul#cestaDoCliente");
const ValorTotalCompra = document.querySelector("#mostraTotalCompra");
const guardaItem = [];
var totalPedido = 0;
itemPr.forEach((item) => {
    item.addEventListener("click", () => {

        li = document.createElement("li");
        li.setAttribute("data-preco", item.dataset.preco);
        if (guardaItem.indexOf(item.textContent) == -1) {
            guardaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent = item.textContent;
            totalPedido += Number(item.dataset.preco);
            ValorTotalCompra.value = totalPedido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        } else {
            alert(`O item ${item.textContent} já esta dentro de sua cesta de compras !!`);
        }
    });
});


// criei uma forma para excluir com dois clicks... 
const cesta = document.querySelectorAll("#cestaDoCliente");
cesta.forEach((item) => {
    item.addEventListener('dblclick', (itemCesta) => {
        var excluir = guardaIten.indexOf(itemCesta.target.textContent);
        if (excluir > -1) {
            totalPedido = Number(itemCesta.target.dataset.preco);
            cestaCliente.removeChild(cestaDoCliente.childNodes[excluir]);
            guardaItem.splice(excluir, 1);
            ValorTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    });
});