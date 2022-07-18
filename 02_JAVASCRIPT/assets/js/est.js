class est {
  constructor() { }
  ingresar(edad) {
    if (edad >= 18) {
      resp = "Puede ingresar";
    } else {
      resp = "No puede ingresar";
    }
    return resp;
  }
  ver_cedula(cedula) {
    const myArray = cedula.split("");
    let total = 0;
    let longitud = myArray.length;
    let aux;
    if (ced != "" && longitud == 10) {
      for (let i = 0; i < 9; i++) {
        if (i % 2 == 0) {
          aux = parseInt(myArray[i]) * 2;
          if (aux >= 10) {
            aux = aux - 9;
          }
          total += aux;
        } else {
          total += parseInt(myArray[i]);
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;
      if (myArray[9] == total) {
        document.getElementById("demo2").innerHTML = "Cedula correcta";
      } else {
        document.getElementById("demo2").innerHTML = "Cedula incorrecta";
      }
    }
  }

}

