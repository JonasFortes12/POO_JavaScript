import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }

    //Sobrescrita do método Sacar()
    sacar(valor) {
        let taxa = 1.02
        return super._sacar(valor, taxa)   
    }

    

}