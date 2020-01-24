const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca e casa com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi))
console.log(texto.match(/^(\w).+\1$/gim))


