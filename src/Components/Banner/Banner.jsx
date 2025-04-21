import React from 'react';
import bookImage from '../../../Assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-10/12">
                <img
                    src={bookImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold w-7/8">  Books to freshen up your bookshelf.</h1>
                    <p className="py-6">
                      
                    </p>
                    <button className=" btn-success btn ">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;