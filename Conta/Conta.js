export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            //lança um erro programado, imepedindo a execução 
            throw new Error("Não se pode instanciar um objeto Conta, diretamente!")
        } 
        this._agencia = agencia
        this._cliente = cliente
        this._saldo = saldoInicial
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
    
    //Método Abstrato
    sacar(valor) {
        throw new Error("O método ainda não foi sobrescrito. Ainda é abstrato!")
    }

    _sacar(valor, taxa){
        if (this._saldo < valor) return

        const valorSacado = taxa*valor
        this._saldo -= valorSacado
        
        return valorSacado
    }

    depositar(valor) {
        if (valor <= 0) return

        this._saldo += valor
    }

    transferir(valor, conta) {
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)

    }



}