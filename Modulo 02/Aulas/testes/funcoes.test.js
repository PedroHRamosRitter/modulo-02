const { test, expect, resumoFinal } = require('../Aula 28/mini-teste')
const { soma, ehPar } = require('./funcoes')

test("Soma - deve somar dois números corretamente", () => {
    expect(soma(2, 3)).toBe(5)
})