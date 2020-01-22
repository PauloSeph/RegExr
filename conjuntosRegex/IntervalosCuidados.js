const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))

// Não define um range
console.log(texto.match(/a-c/g))

console.log(texto.match(/[A-z]/g))

// Tem que respeitar a ordem da tabela Unicode
console.log(texto.match(/[a-Z]/g))
console.log(texto.match(/[a-zA-Z]/g))

console.log(texto.match(/[4-1]/g))
