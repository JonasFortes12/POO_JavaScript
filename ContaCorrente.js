export class ContaCorrente{
    agencia;
    cliente;

    saldo = 0;

    sacar(valor){
        //técnica de early return (tratar primeiro o que não quer que aconteça)
        if(this.saldo < valor) return

        this.saldo -= valor
        return valor
    }

    depositar(valor){
        if(valor <= 0) return
        this.saldo += valor
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        conta.cidade = "Porto"
        valor = 400
    }


}