import React, { useState } from 'react'

function SearchPage(){
    const [searchResults, setSearchResults] = useState({}); 
    
    return (
        <div className="container">
            <section className="row border border-secondary p-3">
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
            <section className="row">
                <div className="col">

                </div>
            </section>
        </div>
    );
}

export default SearchPage;