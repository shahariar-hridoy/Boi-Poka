import React from 'react';
import {
    createBrowserRouter,

} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Components/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/public/BooksData.json'),
                path: '/',
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: 'readlist',
                loader: () => fetch('/public/BooksData.json'),
                Component: ReadList
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('/public/BooksData.json'),
                Component: BookDetails
            }
        ]
    },
]);