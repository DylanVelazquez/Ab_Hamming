function distanciaHamming(num1, num2) {
    var arr1 = num1.split("");
    var arr2 = num2.split("");
    var len1 = arr1.length;
    var len2 = arr2.length;
    
    if (len1 < len2) {
      for (var i = 0; i < len2 - len1; i++) {
        arr1.unshift("0");
      }
    } else if (len2 < len1) {
      for (var i = 0; i < len1 - len2; i++) {
        arr2.unshift("0");
      }
    }
    
    var distancia = 0;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        distancia++;
      }
    }
    
    return distancia;
  }
  
  var num1 = prompt("Ingresa el primer número:");
  var num2 = prompt("Ingresa el segundo número:");
  var d = distanciaHamming(num1, num2);
  console.log("La distancia de Hamming entre " + num1 + " y " + num2 + " es " + d);
  