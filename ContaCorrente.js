import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //atributo de modificação comun a todos os objetos 

    constructor(cliente, agencia){
        super(0, cliente, agencia) // constrói o objeto pai para herdar caract e comportamentos

        ContaCorrente.numeroDeContas++ //acrescenta mais 1 para cada nova instância
    }

    //Sobrescrita do método Sacar()
    sacar(valor) {
        let taxa = 1.10
        return super._sacar(valor, taxa)   
    }



}



