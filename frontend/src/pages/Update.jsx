import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [ updatedBook, setUpdatedBook ] = useState([]);
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {

    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get(`http://localhost:8080/books/${bookId}`);

      setUpdatedBook(res.data.data[0]);
    };

    getBook();
  }, [bookId]);


  return (
    <div className="form">
      {updatedBook && (
        <>
          <h1>Update the Book</h1>
          <input
            defaultValue={updatedBook ? updatedBook.title : ""}
            type="text"
            name="title"
            onChange={handleChange}
          />
          <textarea
            defaultValue={updatedBook ? updatedBook.description : ""}
            rows={5}
            type="text"
            name="description"
            onChange={handleChange}
          />
          <input
            defaultValue={updatedBook ? updatedBook.price : ""}
            type="number"
            name="price"
            onChange={handleChange}
          />
          <input
            defaultValue={updatedBook ? updatedBook.cover : ""}
            type="text"
            name="cover"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Update</button>
          {error && "Something went wrong!"}
          <Link to="/">See all books</Link>
        </>
      )}
    </div>
  );
};

export default Update;
