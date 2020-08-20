const estudante = require('./estudante');

describe('Testes para alunos', () =>{
	it('Deve retornar 10 quandos as notas forem 5,3 e 2', () =>{
		const notas = [5,3,2];
		expect(estudante.soma(notas)).toEqual(10);
	})

	it('Deve retornar zero quando umas das notas for zero', () =>{
		const notas = [1,2,3,0];
		expect(estudante.soma(notas)).toEqual(0);
	})

	it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', () =>{
		const notas = [1,2,3,4,5,6,7];
		expect(estudante.soma(notas)).toEqual(56);
	})

})