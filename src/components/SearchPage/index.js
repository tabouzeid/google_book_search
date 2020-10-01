import React, { useState } from 'react'
import BookItem from '../BookItem/index';


function SearchPage(){
    const [searchResults, setSearchResults] = useState([]); 

    const search = (event) => {
        event.preventDefault();
        let searchString = event.target.searchinput.value;
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchString)
        .then((resp) => resp.json())
        .then((result) => {
            // console.log(result)
            setSearchResults(result.items);
        });
    };

    return (
        <div className="container">
            <section className="row border border-secondary p-3 mb-5">
                <div className="col">
                    <form onSubmit={search}>
                        <div className="form-group">
                            <label>Search</label>
                            <input type="text" className="form-control" name="searchinput" placeholder="Search by Book Name"/>
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
                            {searchResults.map((result, index) => <BookItem key={index} book={result}/>)}
                        </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default SearchPage;