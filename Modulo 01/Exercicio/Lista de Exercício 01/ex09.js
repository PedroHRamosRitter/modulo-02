/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

a = 0
b = 1

console.log(a)
console.log(b)

for(let i = 3; i <= 10; i++){
    c = a + b
    console.log(c)
    a = b
    b = c
}