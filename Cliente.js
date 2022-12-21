import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente{
    nome;
    #cpf;
    #rg;
    #conta;

    constructor(nome, cpf, rg, conta){
        this.nome = nome
        this.#cpf = cpf
        this.#rg = rg
        this.conta = conta //uso o acessor set, mesmo no construtor
    }

    get cpf(){
        return this.#cpf
    }

    get rg(){
        return this.#rg
    }

    set conta(conta){
        if(conta instanceof ContaCorrente)
            this.#conta = conta
    }

    get conta(){
        return this.#conta
    }

    sacar(valor){
        //técnica de early return (tratar primeiro o que não quer que aconteça)
        if(this.conta.saldo < valor) return

        this.conta.saldo -= valor
        return valor
    }

    depositar(valor){
        if(valor <= 0 || !Number.isInteger(valor)) return
        this.conta.saldo += valor
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}
