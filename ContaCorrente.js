import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //atributo de modificação comun a todos os objetos 
    agencia;

    #cliente;
    #saldo = 0;

    constructor(cliente, agencia){
        this.agencia = agencia
        this.cliente = cliente //uso o acessor set, mesmo no construtor
        ContaCorrente.numeroDeContas++ //acrescenta mais 1 para cada nova instância
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this.#cliente = novoCliente
    }

    get cliente(){
        return this.#cliente
    }

    get saldo(){
        return this.#saldo
    }
    

    sacar(valor){
        //técnica de early return (tratar primeiro o que não quer que aconteça)
        if(this.#saldo < valor) return

        this.#saldo -= valor
        return valor
    }

    depositar(valor){
        if(valor <= 0) return
        this.#saldo += valor
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        conta.cidade = "Porto"
        valor = 400
    }


}