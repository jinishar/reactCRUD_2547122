import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

export default function App() {
  const [books, setBooks] = useState([]);

  const bookCreate = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title }
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title: newTitle } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Booking List */}
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />

        {/* Booking Form */}
        <div className="mt-8 w-full flex justify-center">
          <BookCreate onCreate={bookCreate} />
        </div>
      </div>
    </div>
  );
}
