const chai = require('chai');
const expect = chai.expect;
const functions = require('../functions/functions');


describe('Só retorna vogal', () =>{
	it('Deveria retornar true para a letra A', () =>{
		expect(functions.vogal('a')).to.equal(true);
	})

	it('Deveria retornar false para a letra B', () =>{
		expect(functions.vogal('b')).to.equal(false);
	})

	it('Deveria retornar true para a letra E', () =>{
		expect(functions.vogal('e')).to.equal(true);
	})

	it('Deveria retornar false para a letra Z', () =>{
		expect(functions.vogal('z')).to.equal(false);
	})
})

describe('Só retorna consoante', () =>{
	it('Deveria retornar true para a letra B', () =>{
		expect(functions.consoante('b')).to.equal(true);
	})

	it('Deveria retornar false para a letra A', () =>{
		expect(functions.consoante('a')).to.equal(false);
	})
})