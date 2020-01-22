const email = `
Os emails:
    - fulano@cod3r.com.br
    - olivia@gmail.com
    - Joaquin@info.com.br
    - maria_doida@registro.br
    - leo.joaquin@yahoo.com
`


console.log(email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(email.match(/\w+@\w+\.\w{2,4}/g))
console.log(email.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(email.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

