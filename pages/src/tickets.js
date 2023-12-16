// valor del ticket
const ticket = 200;
// descuentos
let descEstudiante = 0.80;
let descTrainee = 0.50;
let descjunior = 0.15;

// selec element

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago(){
    let total = cantidad.value * ticket;

    switch(categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descjunior);
            break;
        default:
            break;
    }
    totalPagar.textContent = `total a pagar: $ ${total}`;
    alert(`recuerda presentar tu documentacion para acceder al descuento: total a pagar:$ ${total}`);
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault()
    calcularPago()
});

