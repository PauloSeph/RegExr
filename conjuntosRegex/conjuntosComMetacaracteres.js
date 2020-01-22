const texto = '.$+*?-'

// não precisa de escape dentro do conjunto, não é todos.
console.log(texto.match(/[+.?*$]/g))

// Isso é um intervalo(range)
console.log(texto.match(/[$-?]/g))

// Não é um intervalo(range)
console.log(texto.match(/[$\-?]/g))

console.log(texto.match(/[-$?]/g))