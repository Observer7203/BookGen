import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchBooks } from "./api";

const BookList = ({ seed, lang, likes, reviews }) => {
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(20);

    useEffect(() => {
        fetchBooks({ seed, lang, likes, reviews, count: 20 }).then(setBooks);
    }, [seed, lang, likes, reviews]);

    const loadMoreBooks = () => {
        fetchBooks({ seed, lang, likes, reviews, count: 10 }).then(newBooks => {
            setBooks(prevBooks => [...prevBooks, ...newBooks]);
        });
    };

    return (
        <InfiniteScroll
            dataLength={books.length}
            next={loadMoreBooks}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author(s)</th>
                        <th>Publisher</th>
                        <th>Likes</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.index}</td>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            <td>{book.authors}</td>
                            <td>{book.publisher}</td>
                            <td>{book.likes}</td>
                            <td>{book.reviews}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </InfiniteScroll>
    );
};

export default BookList;
