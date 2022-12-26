import { Conta } from "./Conta.js"

export class ContaSalario extends Conta{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }

    //Sobrescrita do método Sacar()
    sacar(valor) {
        let taxa = 1.01
        return super._sacar(valor, taxa)   
    }

}