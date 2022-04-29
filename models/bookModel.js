class Book {
	constructor(
		id,
		title,
		author,
		categories,
		bookCover,
		description,
		publicationDate
	) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.categories = categories;
		this.bookCover = bookCover;
		this.description = description;
		this.publicationDate = publicationDate;
	}
}

module.exports = Book;
