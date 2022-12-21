import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 11122233309
cliente1.rg = 123456

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 88822233309


let valor = 50

const ContaCorrenteRicardo = new ContaCorrente()
ContaCorrenteRicardo.depositar(1000)
ContaCorrenteRicardo.cliente = cliente1

const ContaCorrenteAlice = new ContaCorrente()
ContaCorrenteAlice.cliente = cliente2

ContaCorrenteRicardo.transferir(valor, ContaCorrenteAlice)

console.log(ContaCorrenteAlice)
console.log(ContaCorrenteRicardo)

console.log(valor)


