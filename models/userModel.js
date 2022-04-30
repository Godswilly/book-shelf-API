class User {
	constructor(id, name, email, password, passwordConfirm) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
	}
}

module.exports = User;
