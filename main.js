const quiniela = {
  0: "Los huevos",
  1: "El agua",
  2: "El niño",
  3: "San Cono",
  4: "La cama",
  5: "El gato",
  6: "El perro",
  7: "El revólver",
  8: "El incendio",
  9: "El arroyo",
  10: "El cañón",
  11: "El minero",
  12: "El soldado",
  13: "La yeta",
  14: "El borracho",
  15: "La niña bonita",
  16: "El anillo",
  17: "La desgracia",
  18: "La sangre",
  19: "El pescado",
  20: "La fiesta",
  21: "La mujer",
  22: "El loco",
  23: "El cocinero",
  24: "El caballo",
  25: "La gallina",
  26: "La misa",
  27: "El peine",
  28: "Los cerros",
  29: "San Pedro",
  30: "Santa Rosa",
  31: "La luz",
  32: "El dinero",
  33: "Cristo",
  34: "La cabeza",
  35: "El pajarito",
  36: "La castaña",
  37: "El dentista",
  38: "Las piedras",
  39: "La lluvia",
  40: "El cura",
  41: "El cuchillo",
  42: "Las zapatillas",
  43: "El balcón",
  44: "La cárcel",
  45: "El vino",
  46: "Los tomates",
  47: "El muerto",
  48: "Muerto que habla",
  49: "La carne",
  50: "El pan",
  51: "El serrucho",
  52: "Madre e hijo",
  53: "El barco",
  54: "La vaca",
  55: "La música",
  56: "La caída",
  57: "El jorobado",
  58: "El ahogado",
  59: "Las plantas",
  60: "La virgen",
  61: "Escopetas",
  62: "La inundación",
  63: "El casamiento",
  64: "El llanto",
  65: "El cazador",
  66: "Las lombrices",
  67: "La mordida",
  68: "Los sobrinos",
  69: "Los vicios",
  70: "Muerto sueño",
  71: "Excremento",
  72: "La sorpresa",
  73: "El hospital",
  74: "Gente negra",
  75: "Los besos",
  76: "Las llamas",
  77: "Pierna mujer",
  78: "La ramera",
  79: "El ladrón",
  80: "La bocha",
  81: "Las flores",
  82: "La pelea",
  83: "Mal tiempo",
  84: "La iglesia",
  85: "La linterna",
  86: "El humo",
  87: "Los piojos",
  88: "El Papa",
  89: "La rata",
  90: "El miedo",
  91: "El excusado",
  92: "El médico",
  93: "El enamorado",
  94: "El cementerio",
  95: "Los anteojos",
  96: "El marido",
  97: "La mesa",
  98: "La lavandera",
  99: "El hermano",
};

const formulario = document.getElementById("formulario");

const usuarioIngresado = document.getElementById("usuario");

const usuarioGuardar = document.querySelector(".btn-guardar");

const jugar = document.getElementById("jugar");

const sectionUno = document.querySelector(".seccion-uno");

const sectionDos = document.querySelector(".seccion-dos");

const sectionTres = document.querySelector(".seccion-tres");

const datos = document.getElementById("datos");

const saludo = document.getElementById("saludo");

let jugadores = [];
let jugadorActual;

let jugadoresGuardados = localStorage.getItem("jugador");
if (jugadoresGuardados) {
  jugadores = JSON.parse(jugadoresGuardados);
}

function mostrarDatos() {
  datos.innerHTML = "";
  jugadores.forEach((jugador) => {
    let fila = document.createElement("tr");

    let tdNombre = document.createElement("td");
    tdNombre.textContent = jugador.nombre;

    let tdTiros = document.createElement("td");
    tdTiros.textContent = jugador.tiros;

    let tdAciertos = document.createElement("td");
    tdAciertos.textContent = jugador.aciertos;

    let tdErrados = document.createElement("td");
    tdErrados.textContent = jugador.errados;

    fila.appendChild(tdNombre);
    fila.appendChild(tdTiros);
    fila.appendChild(tdAciertos);
    fila.appendChild(tdErrados);

    datos.appendChild(fila);
  });
}

usuarioGuardar.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = usuarioIngresado.value.trim();
  if (nombre === "" || !isNaN(nombre))
    return alert("Ingrese un nombre (no numeros)");

  let yaExiste = jugadores.find((jugador) => jugador.nombre === nombre);
  if (yaExiste) {
    jugadorActual = yaExiste;
    saludo.textContent = `Bienvenido Nuevamente ${jugadorActual.nombre}`;
  } else {
    jugadorActual = {
      nombre: nombre,
      tiros: 0,
      aciertos: 0,
      errados: 0,
    };
    jugadores.push(jugadorActual);
    saludo.textContent = `Bienvenido ${jugadorActual.nombre}`;

    mostrarDatos();
  }

  localStorage.setItem("jugador", JSON.stringify(jugadores));

  jugar.removeAttribute("hidden");
  sectionUno.setAttribute("hidden", "true");
  sectionDos.removeAttribute("hidden");
});

const botones = [
  { clase: "btn-adivinar", texto: "Adivinar", logica: tirarDado },
  {
    clase: "btn-numsuerte",
    texto: "Número de la suerte",
    logica: numeroSuerte,
  },
  { clase: "btn-quiniela", texto: "Quiniela", logica: numQuiniela },

  {
    clase: "btn-cambiarusuario",
    texto: "Cambiar Usuario",
    logica: cambiarUsuario,
  },
  {
    clase: "btn-borrardatos",
    texto: "Borrar Datos",
    logica: borrarDatos,
  },
];

function crearBoton(nombreClase, texto, logica) {
  const boton = document.createElement("button");
  boton.className = `btn ${nombreClase}`;
  boton.textContent = texto;
  boton.addEventListener("click", logica);

  return boton;
}
jugar.addEventListener("click", () => {
  jugar.setAttribute("hidden", "true");

  botones.forEach((boton) => {
    const nuevoBoton = crearBoton(boton.clase, boton.texto, boton.logica);
    sectionDos.appendChild(nuevoBoton);
  });
});

function tirarDado() {
  let numDado = Math.floor(Math.random() * 6) + 1;
  let numElegido = parseInt(prompt("Adivina el número del 1 al 6:"));

  if (numElegido < 1 || numElegido > 6) {
    alert("Numero no valido");
  }
  jugadorActual.tiros++;

  if (parseInt(numElegido) === numDado) {
    jugadorActual.aciertos++;
    alert("Acertaste! El numero era " + numDado);
  } else {
    jugadorActual.errados++;
    alert("Perdiste! El numero era " + numDado);
  }

  localStorage.setItem("jugador", JSON.stringify(jugadores));

  mostrarDatos();
}

function numeroSuerte() {
  alert("Tu numero de la suerte es: " + (Math.floor(Math.random() * 100) + 1));
}

function numQuiniela() {
  let numSignificado = parseInt(prompt("Ingrese un numero del 0 al 99"));
  if (quiniela[numSignificado] !== undefined) {
    alert("Significado es: " + quiniela[numSignificado]);
  } else {
    alert("Numero no valido");
  }
}

function cambiarUsuario() {
  sectionUno.removeAttribute("hidden");
  sectionDos.setAttribute("hidden", "true");
  sectionDos.querySelectorAll(".btn").forEach((boton) => {
    boton.remove();
  });
  usuarioIngresado.value = "";
}

function borrarDatos() {
  localStorage.removeItem("jugador");
  location.reload(); // Recargar la página
}

mostrarDatos();
