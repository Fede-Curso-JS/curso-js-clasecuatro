// Pedimos al usuario indicar los detalles de la tarea que realizó
let task = prompt('¿Qué tarea estas realizando?');
let project = prompt('¿Para qué proyecto estás realizando esta tarea?');
let time = prompt('¿Cuantas horas te llevó hacerla?');
let price = prompt('¿Cuál es el monto en USD que cobrás por hora?');

// Ejecutamos la función con un botón para mostrarle al cliente los datos
function Task() {
    if (task && project && time && price){
        let totalPrice = time * price; 
        alert(`¡Ya registramos tu tarea en nuestra base de datos!
        
Trabajaste en el ${task} para ${project}, con un total de ${time}hs a un precio de ${price}U$D por hora. El total de U$D ganados por este proyecto es de ${totalPrice}U$D.`);
        Convertor();
    } else {
        alert(`¡No ingresaste los datos suficientas para crear una tarea!
Volvé a intentarlo`);
        // Recargar web en el caso que no haya ingresado los datos pedidos
        location.reload();
    }
}

// En el caso que el usuario lo desee, convierte sus U$D a ARS con esta función
function Convertor() {
    let usd = time * price;
    let ars = 138.04;
    let convertorUSD = usd * ars;
    
    let convertor = prompt('¿Querés convertir esos U$D a ARS? (Si / No)');
    if (convertor == "Y" || convertor == "y" || convertor == "Si" || convertor == "SI" || convertor == "si" || convertor == "S" || convertor == "s") {
        alert(`Te informamos que el Dólar Oficial hoy 23/08/2022 es igual $138.04 ARS`);
        alert(`Los ingresos obtenidos por el ${task} es un total de ${convertorUSD} Pesos Argentinos.`);
    } else {
        alert(`¡Perfecto! El total obtenido por ${project} seguirá siendo de ${usd}U$D.`);
    };
};