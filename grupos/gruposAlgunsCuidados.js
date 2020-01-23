const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

// Dentro de um conjunto o grupo não existe
console.log(texto.match(/[(abc)]/gi))

// Já colocando um conjunto dentro do grupo funciona.
console.log(texto.match(/([abc])/gi)) 

console.log(texto.match(/(abc)+/gi)) 


