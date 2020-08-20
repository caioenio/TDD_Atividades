
exports.calculo = (valor) =>{
	var juros;

	if (valor <= 30) {
		juros = 5;
	}

	if (valor >= 31 && valor <= 60) {
		juros = 10;
	}

	if (valor > 60) {
		juros = 15;
	}

	return juros;
}