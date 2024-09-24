import { useEffect, useState } from 'react'
import BookDetails from './Details'
import axios from 'axios'

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:7000/books')
        setBooks(response.data)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <>
      <h1>Book List</h1>
      {
        books ?
        <ul>
          { books.map(book => (
            <li key={book.id} onClick={() => setSelectedBook(book)}>
              {book.name} by {book.author}
            </li>
          ))}
        </ul>
        :
        <p>Loading...</p>
      }
      { selectedBook &&
        <button onClick={() => setSelectedBook(null)}>
          Clear book selected
        </button>
      }
      <BookDetails book={selectedBook} />
    </>
  )
}

export default Books