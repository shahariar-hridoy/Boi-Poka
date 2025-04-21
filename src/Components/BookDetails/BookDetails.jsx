import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image } = singleBook || {};

    const handleMarkAsRead = (id) =>{
        addToStoredDB(id)
    }
    return (
        <div className='border-2 border-slate-200 w-2/3 mx-auto flex gap-4'>
            <div>
                <img className='w-48' src={image} alt="" />
            </div>
            <div>
            <h5>{bookName}</h5>
            <button onClick={() =>handleMarkAsRead(id)} className='btn btn-accent m-2'>Mark As Read</button>
            <button className='btn btn-info m-2'>Add To Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;