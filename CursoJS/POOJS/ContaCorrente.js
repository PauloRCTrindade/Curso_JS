
export class ContaCorrente{
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