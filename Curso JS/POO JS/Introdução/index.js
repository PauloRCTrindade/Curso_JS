
import{Cliente} from "C:\Users\Paulo Trindade\OneDrive\Documentos\Meu_GitHub\Curso_JS\Curso JS\POO JS\Introdução\Cliente.js"
import{ContaCorrente} from "C:\Users\Paulo Trindade\OneDrive\Documentos\Meu_GitHub\Curso_JS\Curso JS\POO JS\Introdução\ContaCorrente.js"

const cliente01 = new Cliente()
cliente01.nome = 'Paulo'
cliente01.cpf = 012501250125
cliente01.rg = 1236547

const contaCorrentePaulo = new ContaCorrente()
contaCorrentePaulo_saldo = 1000
contaCorrentePaulo.agencia = 2121


const valorSacado = contaCorrentePaulo.sacar(200)
console.log(valorSacado)



