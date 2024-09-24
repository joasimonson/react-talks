const BookDetails = ({ book }) => {
  if (!book) {
    return
  }

  return (
    <div>
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>Publish Date: {book.publishDate}</p>
    </div>
  )
}

export default BookDetails