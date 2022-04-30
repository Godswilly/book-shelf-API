class User {
	constructor(id, name, email, photo, password, passwordConfirm) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.photo = photo;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
	}
}

module.exports = User;
