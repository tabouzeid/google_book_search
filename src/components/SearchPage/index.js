import React, { useState } from 'react'
import BookItem from '../BookItem/index';

function SearchPage(){
    const [searchResults, setSearchResults] = useState([]); 
    
    return (
        <div className="container">
            <section className="row border border-secondary p-3 mb-5">
                <div className="col">
                    <form>
                        <div class="form-group">
                            <label>Search</label>
                            <input type="text" class="form-control" name="search-input" placeholder="Search by Book Name" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                </div>
            </section>
            <section className="row border border-secondary p-3">
                <div className="col">
                <div class="card">
                    <div class="card-header">
                        Results
                    </div>
                    <div class="card-body">
                        {searchResults.map((result, index) => <BookItem key={index} book={result}/>)}
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SearchPage;