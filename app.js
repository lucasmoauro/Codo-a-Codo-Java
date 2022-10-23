const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const resumen = document.getElementById("resumen");
const total = document.getElementById("total");
const totalTexto = document.getElementById("textoTotal");
const borrar = document.getElementById("borrar");
const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");

let categoriaSeleccionada = "";
let cantidadSeleccionada = 0;
let totalAPagar = 0;
const valorTicket = 200;

let totalEsVisible = false;

cantidad.addEventListener("change", (e) => {
	cantidadSeleccionada = e.target.value;
});

categoria.addEventListener("change", (e) => {
	categoriaSeleccionada = e.target.value;
});

resumen.addEventListener("click", (e) => {
	e.preventDefault();
	if (!cantidad.value || cantidadSeleccionada === 0) {
		total.classList.remove("visually-hidden");
		totalTexto.classList.remove("bg-info");
		totalTexto.classList.add("bg-danger");
		totalTexto.classList.add("text-light");
		totalTexto.innerText = "La cantidad debe ser mayor a 0.";
		totalEsVisible = true;
		return;
	}
	resumenTotal();
});

borrar.addEventListener("click", () => {
	totalEsVisible = false;
	nombre.value = "";
	apellido.value = "";
	correo.value = "";
	cantidad.value = "";
	categoria.value = "";

	if (!totalEsVisible) {
		total.classList.add("visually-hidden");
	}
});

const resumenTotal = () => {
	switch (categoriaSeleccionada) {
		case "estudiante":
			totalAPagar =
				cantidadSeleccionada * valorTicket -
				cantidadSeleccionada * valorTicket * 0.8;
			totalTexto.innerText = `Total a pagar: $ ${totalAPagar}`;
			total.classList.remove("visually-hidden");
			break;

		case "trainee":
			totalAPagar =
				cantidadSeleccionada * valorTicket -
				cantidadSeleccionada * valorTicket * 0.5;
			totalTexto.innerText = `Total a pagar: $ ${totalAPagar}`;
			total.classList.remove("visually-hidden");
			break;

		case "junior":
			totalAPagar =
				cantidadSeleccionada * valorTicket -
				cantidadSeleccionada * valorTicket * 0.15;
			totalTexto.innerText = `Total a pagar: $ ${totalAPagar}`;
			total.classList.remove("visually-hidden");
			break;

		default:
			break;
	}
};
