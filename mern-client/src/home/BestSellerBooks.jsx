// import React, { useEffect, useState } from 'react'

// const FavoriteBooks = () => {
   
//     const[books, setBooks] = useState([]);

//     useEffect( () => {
//         fetch("http://localhost:5000/all-books").then(res => res.json()).then(daa => console.log(data))
//     }, [])

//   return (
//     <div>FavoriteBooks</div>
//   )
// }

// export default FavoriteBooks



// import React, { useEffect, useState } from 'react';
// import BookCards from '../components/BookCards';
// BestSellerBooks = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:5000/all-books")
//             .then(res => res.json())
//             .then(data => {
//                 // Update state with fetched data
//                 console.log(data); // Just for debugging
//                 setBooks(data.slice(0,8));
//             })
//             .catch(error => {
//                 console.error('Error fetching books:', error);
//             });
//     }, []);

//     return (
//         <div>
//            <BookCards books={books} headline="Best Seller Books"/>
//             {/* Render books here */}
//         </div>
//     );
// };

// export default BestSellerBooks;


import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
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
                console.log(data); // For debugging
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
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    );
};

export default BestSellerBooks;


