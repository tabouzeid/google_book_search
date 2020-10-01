import React from 'react'

function BookItem(props){
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col">
                    <img src={props.book.volumeInfo.imageLinks.thumbnail} className="img-thumbnail" style={{width:'auto', height:'300px'}} alt="Book"/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h4 className="card-title"><a href={props.book.volumeInfo.previewLink}>{props.book.volumeInfo.title}</a></h4>
                        <h5 className="card-title">{'Written by ' + props.book.volumeInfo.authors}</h5>
                        <p className="card-text">{props.book.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookItem;