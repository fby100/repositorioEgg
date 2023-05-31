const contenedor = document.querySelector(".flex-container");
var nroPedido = 0;
var cantidad = 0
var total = 0;
function crearPedido(nroPedido,nombre,cant,total){
	nroPedido = `<h2>${nroPedido}</h2>`;
	nombre = `<h2>${nombre}</h2>`;
	cant = `<h3>${cant}</h3>`;
	total = `<p>TOTAL: <b>$${total}</p>`;
	return [nroPedido,nombre,cantidad,total];
}

let documentFragment = document.createDocumentFragment();

for (var i = 0; i < 5;i++){
	nroPedido++;
	let nombre = "Milanesa";
	cantidad = Math.random()*10;
	total = Math.random()*10+30;
	let pedido = crearPedido(`nroPedido ${i}`,`nombre ${nombre}`, cantidad, total);
	let div = document.createElement("DIV");
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML = pedido[0] + pedido[1] + pedido[2] + pedido[3];
	documentFragment.appendChild(div); 

}

contenedor.appendChild(documentFragment);