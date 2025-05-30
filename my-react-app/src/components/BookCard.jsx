import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    if(!book) return null;
    
   
    const bookKey = book.key;
    
    return (
        <div className="book-card">
            <Link to={`/book/works/${bookKey.replace('/works/', '')}`} className="book-link">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">
                    By : {book.author_name ? book.author_name[0] : "Unknown Author"}
                </p>
                {book.cover_i && (
                    <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt={book.title}
                        className="book-cover"
                    />
                )}
            </Link>
        </div>
    );
};

export default BookCard;
