import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import { ContaSalario } from "./ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309, 123456)

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1234)
// ContaCorrenteRicardo.depositar(500)
// ContaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234)
// contaPoupanca.sacar(10)

const contaSalario = new ContaSalario(0, cliente1, 1234)
contaSalario.depositar(100)
contaSalario.sacar(10)

// const conta = new Conta(0)

console.log(contaSalario)
// console.log(contaPoupanca)

