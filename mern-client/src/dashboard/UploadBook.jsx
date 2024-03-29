import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biblography",
    "Autobiographic",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Adult",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value; // Removed extra space
    const bookPDFURL = form.bookPDFURL.value;
  
    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };
  
    console.log(bookObj);
  
    // Send data to database
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: { // Corrected property name to 'headers'
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert("Book Uploaded Successfully!!!");
      form.reset();
    })
    .catch(error => {
      console.error('Error uploading book:', error);
      alert("Error uploading book. Please try again later.");
    });
  };
  
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Enter Your Book Title"
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
            />
          </div>
        </div>
        {/* 2nd row */}

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL"
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* description */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescrition'  placeholder="Book Descrition :"
         required rows={6} className='w-full' />
        
      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required />
      </div>

      <Button type="submit" className="mt-5">UploadBook</Button>

      </form>
    </div>
  );
};

export default UploadBook;
