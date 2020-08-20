module.exports = {
    soma: notas => {
        if (Math.min(...notas)) {
            const resultado = notas.reduce((acumulador, nota) => {
                acumulador += nota
                return acumulador;
            }, 0)
            if (notas.length > 5) {
                return resultado * 2;
            } else {
                return resultado;
            }
        }
        return 0;
    }
}

// linha 3: busca dentro do array o menor valor que foi passado, se retornar 0 não entra no if, pois 0 é false
// linha 4: reduzindo o array de notas e somando um por um