import React, { useState } from 'react'
import axios from 'axios'
import BookItem from '../BookItem/index';


function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);

    const addBook = (event) => {
        let bookIndex = parseInt(event.target.getAttribute('index'));
        axios.post('/api/books', searchResults[bookIndex]);
    }

    const search = (event) => {
        event.preventDefault();
        let searchString = event.target.searchinput.value;
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchString)
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result.items)
                setSearchResults(result.items.map((book) => {
                    return {
                        _id: book.id,
                        title: book.volumeInfo.title,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        authors: book.volumeInfo.authors,
                        link: book.volumeInfo.previewLink,
                        description: book.volumeInfo.description,
                    }
                }));
            });
    };

    return (
        <div className="container">
            <section className="row border border-secondary p-3 mb-5">
                <div className="col">
                    <form onSubmit={search}>
                        <div className="form-group">
                            <label>Search</label>
                            <input type="text" className="form-control" name="searchinput" placeholder="Search by Book Name" />
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </section>
            <section className="row border border-secondary p-3">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Results
                        </div>
                        <div className="card-body">
                            {searchResults.map((result, index) => <BookItem key={index} index={index} buttonText="Add" buttonClicked={addBook} book={result} />)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SearchPage;