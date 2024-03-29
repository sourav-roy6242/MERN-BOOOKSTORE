import React, { useEffect, useState } from "react";

import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  // delete items

  // const handleDelete = (id) =>{
  //   console.log(id);
  //   fetch(`http://localhost:5000/book/${id}`,{
  //     method:"DELETE",
  //   }).then(res=> res.json()).then(data => {alert("Book is Deleted")
  //   setAllBooks(data)
  // })
  // }

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, { 
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is Deleted");
      // setAllBooks(data);
    })
    .catch(error => {
      console.error('Error deleting book:', error);
      alert("Error deleting book. Please try again later.");
    });
  };
  
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Manage Your Books</h2>
      {/* table for book data */}

      <Table className="lg:w-[1100px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {/* {
          allBooks.map(books,index) =>  <Table.Body className="divide-y" key={book._id}>

          </Table.Body>
        } */}
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            {/*table body content goes here */}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.Category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>
            <Table.Cell>
              <Link
                href="#"
                className="font-medium text-cyan-600 hover:underline mr-5 dark:text-cyan-500" to={`/admin/dashboard/edit-books/${book._id}`}
              >
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)} className="bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-500">Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>
        ))}

      </Table>
    </div>
  );
};

export default ManageBooks;
