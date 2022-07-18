function contar() {
    //vocales
    let cadena = document.getElementById("texto").value;
    var vocales = 0;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {
            vocales++;
        }
    }
    console.log("La cadena " + cadena + " contiene " + vocales + " vocales");
    document.getElementById("vocales").innerHTML = vocales;

    //palabras
    var palabras = 1;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] == " ") {
            palabras++;
        }
    }
    console.log("La cadena " + cadena + " contiene " + palabras + " palabras");
    document.getElementById("palabras").innerHTML = palabras;
}


function numeros() {
    let nums = document.getElementById("numeros").value;
    nums = nums.split(" ");
    console.log("La cadena " + nums + " contiene " + nums.length + " numeros");
    
    let msg = "";
    for (var i = 0; i < nums.length; i++) {
        if(nums[i]=="cero"){
            msg += "0 ";
        }else if(nums[i]=="uno"){   
            msg += "1";
        }else if(nums[i]=="dos"){   
            msg += "2";
        }else if(nums[i]=="tres"){   
            msg += "3";
        }else if(nums[i]=="cuatro"){   
            msg += "4";
        }else if(nums[i]=="cinco"){   
            msg += "5";
        }else if(nums[i]=="seis"){   
            msg += "6";
        }else if(nums[i]=="siete"){   
            msg += "7";
        }else if(nums[i]=="ocho"){   
            msg += "8";
        }else if(nums[i]=="nueve"){   
            msg += "9";
        }else{
            msg += nums[i];
        }
    }  
    
    //ordenar
    let numsOrdenados = msg.split("");
    numsOrdenados.sort(function(a, b){return a-b});

    //enviar
    document.getElementById("respNum").innerHTML = numsOrdenados;
    
    //transformar a string
    let msg2 = "";
    //numsOrdenados = numsOrdenados.split(",");
    for (var i = 0; i < numsOrdenados.length; i++) {
        if(numsOrdenados[i]=="0"){
            msg2 += "cero ";
        }else if(numsOrdenados[i]=="1"){   
            msg2 += "uno ";
        }else if(numsOrdenados[i]=="2"){   
            msg2 += "dos ";
        }else if(numsOrdenados[i]=="3"){   
            msg2 += "tres ";
        }else if(numsOrdenados[i]=="4"){   
            msg2 += "cuatro ";
        }else if(numsOrdenados[i]=="5"){   
            msg2 += "cinco ";
        }else if(numsOrdenados[i]=="6"){   
            msg2 += "seis ";
        }else if(numsOrdenados[i]=="7"){   
            msg2 += "siete ";
        }else if(numsOrdenados[i]=="8"){   
            msg2 += "ocho ";
        }else if(numsOrdenados[i]=="9"){   
            msg2 += "nueve ";
        }else{
            msg2 += numsOrdenados[i];
        }
    }  
    
    document.getElementById("respNumTexto").innerHTML = msg2;
}