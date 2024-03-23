/* 

GC$ 50,00
GC$ 10,00
GC$ 5,00
GC$ 1,00 

*/

function calcularNotas (valor) {
    const notasDisponiveis = [50, 10 , 5, 1];
    let quantidadeNotas = {};

    let i = 0;
    //manter o while rodando 
    while(valor > 0 && i < notasDisponiveis.length) {
        const nota = notasDisponiveis[i];
        //notaDisponiveis = objeto , [i] = chave representa o valor da nota atualmente considerada durante o calculo
        quantidadeNotas[nota] = Math.floor(valor / nota);
        
        valor %= nota;
        i++;
    }

    return quantidadeNotas;
}

let valorDesejado = parseFloat(prompt('Quanto deseja retirar ? '));

const notasNecessarias = calcularNotas(valorDesejado); 

console.log('Valor desejado:', valorDesejado);
console.log('Número de notas necessárias: ');
for (let nota in notasNecessarias) {
    console.log(`Nota de GC$ ${nota}: ${notasNecessarias[nota]}`);
}
