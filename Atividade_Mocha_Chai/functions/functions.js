exports.vogal = (char) => {
	return ['a','e','i','o','u'].indexOf(char) > -1;
}

exports.consoante = (char) => {
	return ['b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','w','x','z'].indexOf(char) > -1;
}
