import { useAppDispatch, useAppSelector } from '../app/hooks'
import {update, isFocused, isBlurred} from '../features/search/searchSlice';
import '../css/SearchBox.css'

const SearchBox = () => {

    const searchInput = useAppSelector( (state) => state.search.value);
    const dispatch = useAppDispatch();

    const handleInputChange = (event) =>{
        
        let newSearchInput = event.target.value;
        dispatch(update(newSearchInput));
    }

    return (
        <div className = "SearchBox">
            <form action="">
                <i className="fas fa-search fa-xs"></i>
                <input 
                    type="text" 
                    value={searchInput} 
                    onChange = {handleInputChange} 
                    onFocus={() => dispatch(isFocused())}
                    onBlur={() => dispatch(isBlurred())}
                />
            </form>
        </div>
        );
}

export default SearchBox;
