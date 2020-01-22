const texto = 'a    b'
console.log(texto.match(/a    b/g))
console.log(texto.match(/a\s\s\s\sb/))

// No futuro...

console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {4}b/))
console.log(texto.match(/a\s{4}b/))