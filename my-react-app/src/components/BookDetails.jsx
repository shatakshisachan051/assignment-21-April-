import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails=()=>{
    const {id} = useParams();
    const navigate = useNavigate()
    const [book, setBook] = useState(null)
    const [loading,setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(()=>{
        const fetchBookDetails = async()=>{
            try{
                const response = await axios.get(`https://openlibrary.org${id}.json`)

                setBook(response.data)
                setLoading(false);
            }
            catch(err){
                setError('Failed to fetch Book details, try again')
                setLoading(false)
            }
        }

        fetchBookDetails();
    },[id])

    if(loading){
        return <div> Loading...</div>
    }

    if(error){
        return <div>
            {error}
        </div>
    }

    if(!book){
        return <div>Book not found</div>
    }

    return (
        <div>
            <button onClick={()=> navigate(-1)}>
                back
            </button>
            <h1>{book.title}</h1>

            {book.description && (
                <div> 
                    <h2>Description</h2>
                    <p>{book. description.value || book.description}</p>
                </div>
            ) }
            {book.authors && (
                <div>
                    <h2>Authors</h2>

                    <ul>
                        {book.authors.map((author)=>(
                            <li key={author.author.key}>{author.author.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BookDetails;