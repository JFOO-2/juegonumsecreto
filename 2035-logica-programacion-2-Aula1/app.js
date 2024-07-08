/*Modulo 1 */
/*let titulo = document.querySelector('h1'); /* funcion DOM __Dentro del parentecis ponemos el selector tomado del archivo html. para poder modificarlo
                                 Se almacenan en una variable por que se convierten en un objeto*/
//titulo.innerHTML = 'Juego del numero secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Introduzca un numero del 1 al 10';

/* podemos definir una funcion para no duplicar codigo, o hacer lo mismo
cada vez que tengamos que poner algo similar,
dicha funcion lleva parametros, esto para que sea lo mas generica posible para poder reutilizarla
en diferentes momentos*/

let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let listaNumeroSorteados = []; //arreglo
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
  let elementoHTMLV = document.querySelector(elemento);
  elementoHTMLV.innerHTML = texto;
  return;
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del numero secreto');//con esto se llama a la funcion y se les da valores a los parametros(variables) de las mismas,como lo que se hace en el renglon 2 y 4 pero simplificado con una funcion general para dar valor a cualquier etiqueta de html.
  asignarTextoElemento('p',`ngresa un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

/*declaracion de funcion --> en este caso se utiliza en el archivo html */
function verificarIntento(){
  //let numeroDeUsuario = document.querySelector('input'); // manera de usar un input de html
  //Ahora manera de usar varios imput cada uno con un id que le asignas **ver en el index html
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  // el document es el DOM, getelementid es para identificar los input por medio de un id y el ultimo punto es un parametro que da el valor que introduce el usuario.
  console.log(typeof(numeroDeUsuario),typeof(numeroSecreto));
  console.log(numeroSecreto);
  //console.log(numeroDeUsuario);
  //console.log(numeroDeUsuario === numeroSecreto);
  // el triple igual se usa para comparar que incluso sean del mismo tipo de dato
  //console.log(intentos);
  // el usuario hacerto o no-->
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Hacertaste el numero secreto, en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    /* esto es para utilizar el boton nuevo juego,y con .removeAtribute es para quitar el parametro disabled, el cual es para que el boton no tenga funcionamiento
    una ves quitado ese parametro tendra funcionamiento, y lo que hacemos en este codigo es que una vez el usuario acierte el primer juego pueda comenzar un nuevo juego
    desbloqueando el boton nuevo juego.*/
  }else{
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El numero secreto es menor');
    }else{
      asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarinput();
  }
  return;
}

function limpiarinput(){
 //let liimpriarInputCuandoNoAcierta = document.querySelector('#valorUsuario');
 document.querySelector('#valorUsuario').value = '';
  //para usar parametros coin id, utilizando queryselector se utiliza el numeral (#) para indicar que es por medio de un id, de lo contrario se utiliza getelementid para poner el id del parametro de manera directa.
  //liimpriarInputCuandoNoAcierta.value ='';
}
function generarNumeroSecreto() {
  //let numeroSecreto = Math.floor(Math.random()*10)+1;
  //return Math.floor(Math.random()*10)+1;
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  //si ya sorteamos todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) { //salida de recursividad
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    
  }else{
  //si el numero generado esta incluido en la lista
  if (listaNumeroSorteados.includes(numeroGenerado)) { //El método include recorre todo nuestro arreglo y verifica si algo ya existe. Por lo tanto nos devuelve un booleano. Si es true o false. Y recibe como parámetro el valor a verificar. Que en este caso será NúmeroGenerado.
  //recursividad
  return generarNumeroSecreto();
  }else{
    listaNumeroSorteados.push(numeroGenerado); // el push es para empujar el numero en la lista al ultimo lugar.
    return numeroGenerado;
  }
}
  //return numeroSecreto;
  //lo que esta comentado es en caso de crear directamente una variable que almacene la informacion dentro de la misma funcion
}
/*return Significa que cuando ejecutemos la función GenerarNúmeroSecreto, nos va a retornar un valor. Así es. Nos está devolviendo un entero, en este caso, que es nuestro número secreto sorteado o aleatorio generado por la máquina. */


function reiniciarJuego(){
  //limpiar input
  limpiarinput();
  //indicar mensaje de intervalos de numeros (inicio)
  //generar el numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales(); // esta funcion ya hace los tres puntos de arriba
  //desabilitar el boton nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
  // el.setAtrribute es para volber a bloquar el boton nuevo juego con el parametro true.
  

}

condicionesIniciales();

/*Modulo 1 */

/*No estamos explicando qué función cumple esa caja blanca ni qué esperamos hacer. 
Podríamos solucionarlo conectando el HTML con JavaScript a través del Document Object Model (DOM). */

/*En el ejemplo que vimos, utilizamos el método document.querySelector() para seleccionar elementos
 HTML específicos, como el título y el párrafo, y luego modificamos su contenido a través de la 
 propiedad innerHTML. */

 /*css = estilo de la pagina , parte visua
   HTML = estructura de la pagina
   Java Scrip = a la parte funcional
   Selectores = la forma en que java scrip selecciona al elemento*/

/*En caso de los eventos, nosotros, en la etiqueta que queremos trabajar, buscamos y todos los eventos 
en JavaScript comienzan con el prefijo on, de en o cuando.
Ejemplo de uso en html deo on
<button onclick="intentoUsuario" class="container__boton">Intentar</button>  
dentro de las comillas podemos poner codigo, en este caso crearemos una funcion llamada intento usuario
que se manejara atravez de java scrip._____para ver bien su usi en html ir al archivo html del proyecto
--> se declara la funcion en javascrip para ,utilizarse en html con el prefijo on*/

//MODULO 2-->

/* podemos definir una funcion para no duplicar codigo, o hacer lo mismo
cada vez que tengamos que poner algo similar,
dicha funcion lleva parametros, esto para que sea lo mas generica posible para poder reutilizarla
en diferentes momentos*/

/*return Significa que cuando ejecutemos la función GenerarNúmeroSecreto, nos va a retornar un valor. 
Así es. Nos está devolviendo un entero, en este caso, que es nuestro número secreto sorteado o 
aleatorio generado por la máquina. */

//MODULO 3
/*
Aprendimos cómo crear un programa para verificar si el 'intento' ingresado es igual al número secreto definido.Utilizamos estructuras condicionales para tomar decisiones basadas en el resultado de esta comparación;
Creamos una variable para almacenar la cantidad de intentos realizados por el usuario;
Hemos visto la importancia de consultar la documentación del lenguaje y las bibliotecas utilizadas en el desarrollo del programa. La documentación es una fuente valiosa de información que nos ayuda a comprender conceptos y a utilizar correctamente las funcionalidades disponibles. */

//MODULO4
/*
Aprendimos a trabajar con listas en JavaScript, incluyendo cómo agregar elementos, obtener el tamaño de la lista, acceder a elementos específicos y la importancia de conocer la posición del último elemento. También destacamos la importancia de leer la documentación y comprender los conceptos relacionados con el manejo de listas en JavaScript.

La importancia de trabajar con funciones en la programación.

Cómo generar un número secreto a través de una función.

El uso del método push para almacenar el número generado al final de la lista.

Cómo verificar si un número ya existe en la lista utilizando el método includes de JavaScript.

La aplicación de la recursividad para generar un nuevo número válido.

Como implementar un límite en el juego para evitar el bucle infinito.

Como implementar una variable adicional para limitar la cantidad de veces que se puede jugar antes de reiniciar el juego. */