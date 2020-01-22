const texto = `1,2,3,4,5,6, a.b c!d?e	-
f_g`

// Numeros
console.log(texto.match(/\d/g))

// Não numeros
console.log(texto.match(/\D/g))

// Caracteres [a-zA-Z0-9_]
console.log(texto.match(/\w/g))

// Não cracteres [^a-zA-Z0-9]
console.log(texto.match(/\W/g))

// Espaços [ \t\n\r\f\' ']
console.log(texto.match(/\s/g))  

//Tudo que não for espaços em branco
console.log(texto.match(/\S/g)) 

