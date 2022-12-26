/* 
Se autenticar significasse ter um atributo 'senha', seria criado
dinâmicamente um atributo undefined resultando em um retorno -> false
sem apresentar erro na execução.

Ser autenticável significa ter um método 'autenticar' 

Essa técnica se chama Ducky Type - Verificamos o objeto pelo seu comportamentos e atributos, 
pois JS é fracamente tipado.

*/

export class SistemaAutenticacao{

    static login(autenticavel, senha){
        
        if(this.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }


}