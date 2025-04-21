import { useRef, useState } from "react"
import {useDispatch} from 'react-redux';
import { fetchBooks } from "../store/bookSlice";
import { Form } from "react-router-dom";



const SearchBar=()=>{
    const [seachTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null)
    const dispatch = useDispatch();

    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(fetchBooks({query: seachTerm, page:1}));
    }

    const binarySearch = (books,target)=>{
        let left = 0
        let right = books.length -1
        while (left<= right){
            const mid = Math.floor((left+right)/2)
            const bookTitle = books[mid].title.toLowerCase()
            const searchTarget = target.toLowerCase()

            if(bookTitle= searchTarget){
                return mid;
            }
            else if(bookTitle< searchTarget){
                left = mid+1
            }
            else{
                right =mid-1
            }
        }

        return -1
    }

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text" ref={searchInputRef} value={seachTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder="search books..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}

export default SearchBar;