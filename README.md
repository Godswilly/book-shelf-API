# Book-shelf-API
This is a RESTful API created with Express.js and firebase database. The CRUD operations are provided: create, read, update and delete books.


## Features

- Express
- REST API
- Firebase

## Requirements

- [node & npm](https://nodejs.org/en/)

## Installation

- `git clone git@github.com:Godswilly/book-shelf-API.git`
- `cd book-shelf-API`
- `npm install`
- `npm start`
- optional: include _.env_ in your _.gitignore_

### GET Routes

- visit http://localhost:5000
  - /books
  - /books/1
  - /users
  - /users/1

## Below endpoints is applicable with Users

### GET /books

Gets all the books.

### GET /books/:id

Gets a single book.

### POST /books

Creates a book.

**Headers**

Content-Type : application/json

**Request body (raw)**

```
  {
    "title": "glory days",
    "author": "nasa kalu",
    "categories": "thriller",
    "bookCover": "png",
    "isArchived": false,
    "description": "My first testing",
    "publicationDate": "10-06-2022"
  }
```

### PATCH /books/:id

Updates an existing book. The JSON object must be passed in the request body as raw. It returns an error in case the book doesn't exist.

**Headers**

Content-Type : application/json

**Request body (raw)**

```
  {
    "title": "britain",
    "author": "nnena",
    "categories": "thriller",
    "bookCover": "png",
    "isArchived": true,
    "description": "My first testing",
    "publicationDate": "20-08-2022"
  }
```

### DELETE /books/:id

Removes a book given its id.
