const texto = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'


console.log(texto.match(/^r.*r$/gis)) // Problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi))