import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //atributo de modificação comun a todos os objetos 

    constructor(cliente, agencia){
        this.agencia = agencia
        this.cliente = cliente //uso o acessor set, mesmo no construtor
        this._saldo = 0
        ContaCorrente.numeroDeContas++ //acrescenta mais 1 para cada nova instância
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this._cliente = novoCliente
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }
    
    sacar(valor){
        //técnica de early return (tratar primeiro o que não quer que aconteça)
        if(this._saldo < valor) return

        this._saldo -= valor
        return valor
    }

    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        conta.cidade = "Porto"
        valor = 400
    }

}