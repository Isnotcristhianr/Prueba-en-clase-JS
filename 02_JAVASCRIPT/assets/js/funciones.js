/*  $(document).ready(function () {
    $("#cuad").change(function () {
        alert("Hola, ya estoy listo");
    });
}); 
 */
function number(n) {
  document.getElementById("demo1").innerHTML = "Boton seleccionado: " + n;
}
function avisoCambio() {
  alert("El elemento cambio");

  let datos =
    "<input type = 'text' value = 'cambio' onclick = 'saludoCambio()' type='button' id='cambio' class='btn btn-success'>";
  document.getElementById("saludo").innerHTML = datos;
}
function saludoCambio() {
  alert("Hola a todos, bienvenidos");
}
function soloNumeros(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}
function display() {
  let checkradio = document.querySelector('input[name="color"]:checked');
  if (checkradio != null) {
    let color = checkradio.value;
    document.getElementById("demo3").innerHTML =
      checkradio.value + " Fue seleccionado ";
    //document.getElementById("cuad").style.backgroundColor = color;
  } else {
    document.getElementById("demo3").innerHTML = "NO SE HA SELECCIONADO NADA";
  }
}
function color_cuadrado() {
  let checkradio = document.querySelector('input[name="color"]:checked');
  if (checkradio != null) {
    let color = checkradio.value;
    document.getElementById("cuad").style.backgroundColor = color;
  } else {
    alert("No ha seleccionado nada");
  }
}
function mostrarData(data) {
  let body = "";
  for (let i = 0; i < data.length; i++) {
    let aux_id = data[i].id;
    body +=
      "<tr><td>" +
      aux_id +
      "</td><td>" +
      data[i].name +
      "</td><td>" +
      data[i].email +
      "</td><td>" +
      data[i].username +
      "</td><td> <button type='button' value='" +
      aux_id +
      "'class='btn btn-success' onclick= 'contarN(`" +
      data[i].name +
      "`)' >ACCION</button>" +
      "</td></tr>";
  }

  document.getElementById("data").innerHTML = body;
}
function validar(id) {
  alert("HOLA USUARIO CON EL ID: " + id);
}
function contarN(dato) {
  const myArray = dato.split("");
  texto = myArray.length;
  console.log(texto);
}
