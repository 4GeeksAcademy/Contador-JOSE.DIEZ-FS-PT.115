import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let inicio = false;

export const Home = () => {
	if (!inicio) {
		inicio = true;

		// Mostrar el primer número inmediatamente
		const primerDigito = document.getElementById("digito");
		if (primerDigito) { primerDigito.innerText = numeros[index] };

		// Mostrar el segundo número inmediatamente
		const segundoDigito = document.getElementById("digito2");
		if (segundoDigito) { segundoDigito.innerText = numeros[index2]; }

		//Mostrar el tercero
		const tercerDigito = document.getElementById("digito3");
		if (tercerDigito) {
			tercerDigito.innerText = numeros[index3];
		}
		// Mostrar el primer número inmediatamente
		const cuartoDigito = document.getElementById("digito4");
		if (cuartoDigito) { cuartoDigito.innerText = numeros[index4] };

		// Primer dígito: cada 1 segundo
		setInterval(() => {
			const elemento = document.getElementById("digito");
			if (elemento) {
				index = (index + 1) % numeros.length;
				elemento.innerText = numeros[index];
			}
		}, 1000);

		// Segundo dígito: cada 10 segundos
		setInterval(() => {
			const elemento2 = document.getElementById("digito2");
			if (elemento2) {
				index2 = (index2 + 1) % numeros.length;
				elemento2.innerText = numeros[index2];
			}
		}, 10000);

		// Tercer digito cada 100 segundos
		setInterval(() => {
			const elemento3 = document.getElementById("digito3");
			if (elemento3) {
				index3 = (index3 + 1) % numeros.length;
				elemento3.innerText = numeros[index3];
			}
		}, 100000);

		// Cuarto digito cada 1000segundos
		setInterval(() => {
			const elemento4 = document.getElementById("digito4");
			if (elemento4) {
				index4 = (index4 + 1) % numeros.length;
				elemento4.innerText = numeros[index4];
			}
		}, 1000000);
	}

	return (
		<div className="padre">
			<div className="digito4" id="digito4">0</div>
			<div className="digito3" id="digito3">0</div>
			<div className="digito2" id="digito2">0</div>
			<div className="digito" id="digito">0</div>
		</div>
	);
};

export default Home;