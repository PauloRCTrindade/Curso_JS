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
// classe abstrata
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
        if(this.constructor == Conta){
            throw new Error("Você não devia instanciar através de uma conta pai")
        }
        this._agencia = agencia
        this._cliente = cliente
        this._saldo = saldo
    }
    // metodo abstrato
    sacar(valor){
        throw new Error('O método sacar é absrato')
    }

    _sacar(valor,taxa){
        const valorSacado = valor * taxa
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
        return valorSacado
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
    sacar(valor){
        let taxa = 1.2
        return this._sacar(valor,taxa)
    }
    
}

class ContaPoupanca extends Conta{
    constructor(agencia,cliente,saldo){
        super(agencia,cliente,saldo)
    }

    sacar(valor){
        let taxa = 1
        return this._sacar(valor,taxa)
    }
}

class ContaSalario extends Conta{
    constructor(agencia,cliente,saldo){
        super(agencia,cliente,saldo)
    }
    sacar(valor){
        let taxa = 1
        return this._sacar(valor,taxa)
    }

}

class ContaEmpresarial extends Conta{
    constructor(agencia,cliente,conta){
        super(agencia,cliente,conta)
    }
    sacar(valor){
        let taxa = 1.5
        return this._sacar(valor,taxa)
    }
}

class Funcionario{
    constructor(nome,salario,cpf){
        this._nome = nome
        this._salario = salario
        this._cpf = cpf
        this._bonificacao
        this._senha
    }


    
}



class ContaGerente extends Funcionario{
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)
        this._bonificacao = 1.2
        
    }
}

class ContaDiretor extends Funcionario{
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)
        this._bonificacao = 1.5
    }
}






const cliente01 = new Cliente('Paulo',08914952665 )
const cliente02 = new Cliente('Rafael',1234564569 )
const cliente03  = new Cliente('Willian',52654123)

contaCorrentePaulo = new ContaCorrente(1001,cliente01,0)
contaPoupancaPaulo = new ContaPoupanca(1001,cliente01,0)
contaSalarioPaulo =  new ContaSalario(1001,cliente01,0)
contaFuncionarioPaulo = new ContaFuncionario(1001,cliente01,0)


contaCorrenteRafael = new ContaCorrente(2002,cliente02,0)
contaPoupancaRafael = new ContaPoupanca(2002,cliente02,0)

contaEmpresarialWillian = new ContaEmpresarial(3003,cliente03,0)


contaEmpresarialWillian.depositar(50000)
contaEmpresarialWillian.sacar(100)
console.log(contaEmpresarialWillian)

/*contaFuncionarioPaulo.depositar(500)
contaFuncionarioPaulo.sacar(100)
console.log(contaFuncionarioPaulo)
contaCorrentePaulo.depositar(1000)
contaCorrentePaulo.sacar(100)
contaPoupancaPaulo.depositar(1000)
contaPoupancaPaulo.sacar(100)
console.log(contaPoupancaPaulo)
console.log(contaCorrentePaulo)
*/