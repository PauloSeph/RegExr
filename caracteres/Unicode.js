// No inicio...
// Um byte (8bits) seria 2 elevado a 8 --> 256 caracteres
// Equivalente a - Simbolos, pontuação, A-Z, a-z, 0-9

// Dois bytes - (16bits) seria 2 elevado a 16 --> 65500+ caracteres 
// +Simbolos, +Pontuação, A-Z, a-z, 0-9


// Unicode
// Quantidade de Bytes Variável = Expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// Site para mostrar a tabela do unicode
// https://unicode-table.com/pt/


const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))