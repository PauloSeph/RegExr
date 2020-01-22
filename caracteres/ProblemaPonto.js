const texto = 'Bom\ndia'
console.log(texto.match(/.../gi))
console.log(texto.match(/.../s/gi)) // o Ponto não engloba o \n


// dotall - Algumas linaguens tem um flag /exp/s, mas JS não!