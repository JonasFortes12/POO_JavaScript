import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente01 = new Cliente("Jonas Fortes", 18090342396, 4402982, new ContaCorrente(140))

const cliente02 = new Cliente("Laiane", 18090343466, 4425602, new ContaCorrente(210))


cliente01.depositar(600)


cliente01.transferir(600, cliente02)

console.log(cliente01.nome, cliente01.conta.saldo)
console.log(cliente02.nome, cliente02.conta.saldo)