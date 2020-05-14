class Cliente{
    
    get(){
        this._nome = nome
        this._cpf = cpf
    }
    
    constructor(nome,cpf){
        this._nome = nome
        this._cpf = cpf
    }
}
class Conta{
    set cliente(novoDado){
        if(novoDado instanceof Cliente){
          
        }  this._cliente = novoDado
    }
    
    get cliente(){
        return this.cliente
    }

    get saldo(){
        return this._saldo
    }

    get agencia(){
        return this._agencia
    }

    constructor(agencia,cliente,saldo){
        this._agencia = agencia
        this._cliente = cliente
        this._saldo = saldo
    }
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

class ContaCorrente extends Conta{
    constructor(agencia,cliente,saldo){
        super(agencia,cliente,saldo)
    }
}

class ContaPoupanca extends Conta{
    constructor(agencia,cliente,saldo){
        super(agencia,cliente,saldo)
    }
}

const cliente01 = new Cliente('Paulo',08914952665 )
const cliente02 = new Cliente('Rafael',1234564569 )

contaCorrentePaulo = new ContaCorrente(1001,cliente01,0)
contaPoupancaPaulo = new ContaPoupanca(1001,cliente01,0)


contaCorrenteRafael = new ContaCorrente(2002,cliente02,0)
contaPoupancaRafael = new ContaPoupanca(2002,cliente02,0)
console.log(contaPoupancaPaulo)
console.log(contaPoupancaRafael)
