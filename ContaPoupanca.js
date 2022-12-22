export class ContaPoupanca{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
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

    }

}