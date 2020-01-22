const lista = `Lista Telefonica:
- (11) 98756-1212,
- 98765-4321
- (32) 8855-6725,
- (10) 3331-8040
 `
console.log(lista.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))