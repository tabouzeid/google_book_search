import React, { useEffect, useState } from 'react'
import BookItem from '../BookItem'

function SavedPage(){
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/books")
        .then((result) => result.json())
        .then((result) => {
            setSavedBooks(result);
        });
    }, []); 

    return (
        <div className="container">
            <section className="row border border-secondary p-3">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Saved
                        </div>
                        <div className="card-body">
                            {savedBooks.map((book, index) => <BookItem key={index} book={book}/>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SavedPage;