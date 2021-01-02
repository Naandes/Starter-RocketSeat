let saldo = {
    entrada:[300, 40, 80, 90],
    saida: [90, 40 , 80, 70, 1000]
}

function sum(array){
    let total=0

    for(let value of array){
        total += value
    }



    return total

}

function AzulVermelho(){
    const azul = sum(saldo.entrada)
    const vermelho = sum(saldo.saida)

    if(azul-vermelho >= 0){
        console.log('Está no Azul!')
    }
    else{
        console.log('Está no Vermelho!')
    }
}

AzulVermelho(saldo)