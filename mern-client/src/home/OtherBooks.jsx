// import React, { useEffect, useState } from 'react'
// import BookCards from '../components/BookCards'

// const OtherBooks = () => {
//     const [books, setBooks] = useState([]);
//     useEffect(()=>{
//         fetch("http://loaclhost:5000/all-books").then(res => res.json()).then(data => setBooks=(data))
//     }, [])
//   return (
//    <div>
//     <BookCards books={books} headline={"Other books"}/>
//    </div>
//   )
// }

// export default OtherBooks


import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch books');
                }
                return res.json();
            })
            .then(data => {
                setBooks(data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <BookCards books={books} headline="Other books" />
        </div>
    );
};

export default OtherBooks;

