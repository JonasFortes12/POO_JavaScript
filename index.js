import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 123456)
const cliente2 = new Cliente("Alice", 88822233309, 12344)


const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1234)
const ContaCorrenteAlice = new ContaCorrente("1232", 5678)



// console.log(ContaCorrenteRicardo.cliente)
// console.log(ContaCorrenteAlice.cliente)

console.log(ContaCorrente.numeroDeContas)


