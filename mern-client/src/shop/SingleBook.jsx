// import React from 'react'
// import { useLoaderData } from 'react-router-dom'


// const SingleBook = () => {
//     const{_id , bookTitle,imageURL}= useLoaderData();
//   return (
//     <div  className='mt-28px-4 lg:px-24'>
//         <img src={imageURL} alt='' className='h-96'/>
//         <h2>{bookTitle}</h2>
      
//     </div>
//   )
// }

// export default SingleBook



// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const SingleBook = () => {
//     const { _id, bookTitle, imageURL } = useLoaderData() || {};

//     return (
//         <div className='mt-28 px-4 lg:px-24'>
//             {imageURL && <img src={imageURL} alt={bookTitle} className='h-96' />}
//             <h2>{bookTitle}</h2>
//         </div>
//     );
// };

// export default SingleBook;



// import React, { useEffect, useState } from 'react';

// const SingleBook = () => {
//     const [bookData, setBookData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBookData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/book'); // Replace with the correct endpoint URL
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch book data');
//                 }
//                 const data = await response.json();
//                 setBookData(data);
//             } catch (error) {
//                 console.error('Error fetching book data:', error);
//                 setError(error.message);
//             }
//         };

//         fetchBookData();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!bookData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='mt-28 px-4 lg:px-24'>
//             <img src={bookData.imageURL} alt={bookData.bookTitle} className='h-96' />
//             <h2>{bookData.bookTitle}</h2>
//         </div>
//     );
// };

// export default SingleBook;


import React from 'react'
import { useLoaderData } from 'react-router-dom'


const SingleBook = () => {
    const{id , bookTitle,imageURL}= useLoaderData();
  return (
    <div  className='mt-28px-4 lg:px-24'>
        <img src={imageURL} alt='' className='h-96'/>
        <h2>{bookTitle}</h2>
      
    </div>
  )
}

export default SingleBook;


