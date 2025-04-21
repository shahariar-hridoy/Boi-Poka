import React, { } from 'react';
import { IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise)
    // console.log(data);
    const { bookName, image, rating, category, tags, yearOfPublishing, publisher, bookId } = singleBook
    return (
        <Link to={`/BookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border  border-gray-300 p-5">
                <figure className='px-4 py-4 bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className='flex justify-center gap-8'>
                        {
                            tags.map((tag, index) => <button key={index} >{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by: {publisher}</p>
                    <div className='border-t-2 border-dashed border-slate-400'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <IoMdStarHalf /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;