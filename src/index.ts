
import { calculator } from './module/calculator.exports'

// ! IMPORTANTE: Este arquivo não deve ser alterado!

calculator.add(1).add(2).add([3, 4, 5]).add(3)
calculator.add(6).add(7).add([8, 9, 10]).add(8)

// TODO: a função calculator.list() deverá exibir um array com os seguintes valores:
// ? [0, 1, 2, 3, 4, 5, 3, 6, 7, 8, 9, 10, 8]
console.warn(calculator.list())

// Deve printar: 66
console.log(calculator.sum())

// Deve printar: 7
console.log(calculator.sum([2, 5]))

calculator.remove([6, 12])

// Os valores duplicados 3 e 8, que estavam nas posições 6 e 12 foram excluídos!
// TODO: a função calculator.list() deverá exibir um array com os seguintes valores:
// ? [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.warn(calculator.list())
