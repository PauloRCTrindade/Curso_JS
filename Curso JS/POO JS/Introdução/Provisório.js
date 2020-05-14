class Cliente{
    nome;
    cpf;
    rg;
}
class ContaCorrente{
    agencia;
    _saldo = 500;
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        return valor
        }
    }

    depositar(valor){
        if(valor <= 0){
            return console.log('Essa operação não pode ser realizada')
        }

        this._saldo += valor
        console.log(`Saldo atual ${this._saldo}`)
        
    }
    
}

const cliente01 = new Cliente()
cliente01.nome = 'Paulo'
cliente01.cpf = 012501250125
cliente01.rg = 1236547

const contaCorrentePaulo = new ContaCorrente()
contaCorrentePaulo_saldo = 1000
contaCorrentePaulo.agencia = 2121


const valorSacado = contaCorrentePaulo.sacar(200)
console.log(valorSacado)
