import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../store/bookSlice";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";
import Pagination from "./Pagination";


const BookList=()=>{
    const dispatch = useDispatch()
    const {books,loading,error}= useSelector((state)=> state.books);

    useEffect(()=>{
        dispatch(fetchBooks({query:'',page:1}))
    },[dispatch])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error : {error}</div>
    }

    return (
        <div>
            <SearchBar/>
            <div>
                {books.map((book)=>(
                    <BookCard key={book.key}/>
                ))}
            </div>
            <Pagination/>
        </div>
    )
}

export default BookList