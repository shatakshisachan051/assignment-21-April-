import { useDispatch, useSelector } from "react-redux"
import { fetchBooks, setCurrentPage } from "../store/bookSlice";

const Pagination =()=>{
    const dispatch = useDispatch()
    const {currentPage,totalPages} = useSelector((state)=> state.books);

    const handlePageChange =(newPage)=>{
        dispatch(setCurrentPage(newPage));
        dispatch(fetchBooks({page:newPage}));
    }

    return (
        <div className="pagination">
            <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1} className="page-button">
                Prev
            </button>
            <span className="page-info">Page {currentPage} of {totalPages}</span>
            <button onClick={()=>handlePageChange(currentPage+11)} disabled={currentPage===totalPages} className="page-button">
                Next
            </button>
        </div>
    )
}

export default Pagination;