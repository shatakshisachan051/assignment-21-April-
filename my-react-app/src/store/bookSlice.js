import axios from 'axios'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({query ='',page =1})=>{
        const searchQuery = query || 'fiction';
        const response = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&page=${page}`);
        return response.data;
    }
)

const bookSlice = createSlice({
    name:'books',
    initialState:{
        books:[],
        selectedBook:null,
        loading: false,
        error:null,
        currentPage: 1,
        totalPages:1,
    },
    reducers:{
        setSelectedBook: (state,action)=>{
            state.selectedBook = action.payload;
        },
        setCurrentPage: (state,action)=>{
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchBooks.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchBooks.fulfilled, (state,action)=>{
            state.loading= false;
            state.books= action.payload.docs;
            state.totalPages = Math.ceil(action.payload.numFound/10);
        })
        .addCase(fetchBooks.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    },
})

export const {setSelectedBook,setCurrentPage}= bookSlice.actions;
export default bookSlice.reducer;