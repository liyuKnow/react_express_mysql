import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const New = () => {
  const navigate = useNavigate ();

  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/books', book);

      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form">
      <form action="" encType="multipart/form-data">
        <h1>Add New Book</h1>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={(e) => handleChange(e)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>Register Book</button>
      </form>
    </div>
  );
};

export default New;
