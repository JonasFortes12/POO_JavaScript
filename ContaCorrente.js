export class ContaCorrente{
    static numeroDeContas = 0; //atributo de modificação comun a todos os objetos 
    agencia;

    #saldo = 0;

    constructor(agencia){
        this.agencia = agencia
        ContaCorrente.numeroDeContas++ //acrescenta mais 1 para cada nova instância
    }

    set saldo(valor){
        this.#saldo = valor
    }

    get saldo(){
        return this.#saldo
    }
    

}