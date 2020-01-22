const cpf= '600.567.890-12, 768.998.345-23, 454.674.333-21 678.999.752-80'


console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

// Que eu fiz:
console.log(cpf.match(/[0-9].{0,14}/g))

 
