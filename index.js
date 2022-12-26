import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionários/Diretor.js"
import { Gerente } from "./Funcionários/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Jonas", 10000, 12345678900)
diretor.cadastrarSenha(123456)

const gerente = new Gerente("Laiane", 5000, 12342458901)
gerente.cadastrarSenha(56789)

const cliente = new Cliente("David", 18090122398, "778")


const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456")
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "56789")
const estaLogadoCliente = SistemaAutenticacao.login(cliente, "778")


console.log(estaLogadoDiretor, estaLogadoGerente, estaLogadoCliente)
