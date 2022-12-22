import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 123456)
const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1234)
ContaCorrenteRicardo.depositar(500)
ContaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234)

console.log(ContaCorrenteRicardo)
console.log(contaPoupanca)



