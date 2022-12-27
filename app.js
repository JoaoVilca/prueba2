'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]
document.getElementById('2').innerText = `${to_do[1]}`
for(let i = 0; i < to_do.length; i++){
    document.getElementById('container').innerHTML = `<input id="1" type="checkbox">`
    console.log('asd')
}
console.log(to_do)
