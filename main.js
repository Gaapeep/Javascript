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

let usuario = prompt("Ingrese su nombre:");

let opcion = prompt(
  `${usuario} - ELIGE\n1 - Adivinar\n2 - Numero de la Suerte\n3 - Quiniela\n4 - Cambiar Usuario\n5 - Salir`
);

while (opcion !== "5") {
  switch (opcion) {
    case "1":
      function tirarDado() {
        let numDado = Math.floor(Math.random() * 6) + 1;
        let numElegido = parseInt(prompt("Adivina el número del 1 al 6:"));

        if (numElegido < 1 || numElegido > 6) {
          alert("Numero no valido");
        } else {
          if (parseInt(numElegido) === numDado) {
            alert("Acertaste! El numero era " + numDado);
          } else {
            alert("Perdiste! El numero era " + numDado);
          }
        }
      }
      tirarDado();
      break;
    case "2":
      confirm(
        "Tu numero de la suerte es: " + (Math.floor(Math.random() * 100) + 1)
      );
      break;

    case "3":
      let numSignificado = parseInt(prompt("Ingrese un numero del 0 al 99"));
      if (quiniela[numSignificado] !== undefined) {
        alert("Significado es: " + quiniela[numSignificado]);
      } else {
        alert("Numero no valido");
      }
      break;
    case "4":
      usuario = prompt("Ingrese su nombre:");
      break;

    default:
      console.log("Opcion no valida");
      break;
  }
  opcion = prompt(
    `${usuario} - ELIGE\n1 - Adivinar\n2 - Numero de la Suerte\n3 - Quiniela\n4 - Cambiar Usuario\n5 - Salir`
  );
}

console.log("Gracias por jugar");
