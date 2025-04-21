import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const bookResponse = await axios.get(`https://openlibrary.org/works/${id}.json`);
                const bookData = bookResponse.data;

                let authorDetails = [];
                if (bookData.authors) {
                    const authorPromises = bookData.authors.map(author => 
                        axios.get(`https://openlibrary.org${author.author.key}.json`)
                    );
                    const authorResponses = await Promise.all(authorPromises);
                    authorDetails = authorResponses.map(response => response.data);
                }

                setBook({
                    ...bookData,
                    authorDetails
                });
                setLoading(false);
            } catch (err) {
                console.error("Error fetching book details:", err);
                setError('Failed to fetch Book details. Please try again.');
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!book) {
        return <div className="not-found">Book not found</div>;
    }

    return (
        <div className="book-details">
            <button onClick={() => navigate(-1)} className="back-button">
                Back to Books
            </button>
            <div className="book-content">
                <h1>{book.title}</h1>
                
                {book.description && (
                    <div className="description">
                        <h2>Description</h2>
                        <p>{typeof book.description === 'string' ? book.description : book.description.value}</p>
                    </div>
                )}

                {book.authorDetails && book.authorDetails.length > 0 && (
                    <div className="authors">
                        <h2>Authors</h2>
                        <ul>
                            {book.authorDetails.map((author, index) => (
                                <li key={index}>{author.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {book.subjects && (
                    <div className="subjects">
                        <h2>Subjects</h2>
                        <ul>
                            {book.subjects.map((subject, index) => (
                                <li key={index}>{subject}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookDetails;