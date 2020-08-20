const chai = require('chai');
const expect = chai.expect;
const funcoes = require('../src/funcoes/funcoes');


describe('Teste de juros para 30 dias de atraso', () =>{
	it('paga-se 5% de juros até 30 dias de atraso', () =>{
		//passar a quantidade de dias para realizar os testes
		var dias = 1;
		expect(funcoes.calculo(dias)).to.equal(5);
	})
})


describe('Teste de juros de 31 dias até 60 dias de atraso', () =>{
	it('paga-se 10% de juros de 31 até 60 dias de atraso', () =>{
		//passar a quantidade de dias para realizar os testes
		var dias = 35;
		expect(funcoes.calculo(dias)).to.equal(10);
	})
})

describe('Teste de juros para mais de 60 dias de atraso', () =>{
	it('paga-se 15% de juros a partir de 60 dias de atraso', () =>{
		//passar a quantidade de dias para realizar os testes
		var dias = 600;
		expect(funcoes.calculo(dias)).to.equal(15);
	})
})