/* 
Ser autenticável significa ter um método 'autenticar' 

Se autenticar significasse ter um atributo 'senha', seria criado
dinâmicamente um atributo undefined resultando em um retorno -> false
sem apresentar erro na execução.

*/

export class SistemaAutenticacao{

    static login(autenticavel, senha){
        return autenticavel.autenticar(senha)
    }


}