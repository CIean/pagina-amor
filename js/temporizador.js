// Establecer la fecha del cumpleaños
var fechaCumpleanos = new Date("May 19, 2023 00:00:00").getTime();

// Actualizar el temporizador cada segundo
var x = setInterval(function() {

  // Obtener la fecha y hora actual
  var ahora = new Date().getTime();

  // Calcular la diferencia entre la fecha actual y la fecha del cumpleaños
  var diferencia = fechaCumpleanos - ahora;

  // Calcular los días, horas, minutos y segundos restantes
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Agregar un cero antes del número si es menor que 10
  if (dias < 10) {
    dias = "0" + dias;
  }
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // Mostrar el tiempo restante en el temporizador
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  // Si la fecha del cumpleaños ha pasado, mostrar un mensaje
  if (diferencia < 0) {
    clearInterval(x);
    document.getElementById("temporizador").innerHTML = "Feliz cumpleaños!";
  }
}, 1000);
