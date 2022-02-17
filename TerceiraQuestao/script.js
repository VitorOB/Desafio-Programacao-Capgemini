const input = require("fs").readFileSync("stdin", "utf8");

var contador = 0
var substr1 = ''
var verificador = false

for (let aux = 0; aux < input.length; aux++) {
    for (let i = 0; i < input.length; i++) {
        substr1 = input.substr(i, aux + 1).trim();
        var substr2 = ''
        for(let j = i+1; j <= input.length; j++){
            substr2 = input.substr(j, aux + 1).trim()
            var arr1 = substr1.split('')
            var arr2 = substr2.split('')
            arr1 = arr1.sort()
            arr2 = arr2.sort()
            substr1 = arr1.join('')
            substr2 = arr2.join('')
            
            if (substr1 === substr2) {
                verificador = true
                contador++
            } else {
                verificador = false
            }
    
        }
    }
}

console.log(contador)
