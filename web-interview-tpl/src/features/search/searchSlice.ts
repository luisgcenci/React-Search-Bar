import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface SearchState {

    value: String,
    focused: boolean
}

const initialState : SearchState = {

    value: '',
    focused: false
}

const searchSlice = createSlice({

    name : 'search',
    initialState,
    reducers:{

        update(state, action : PayloadAction<string>){
            
            state.value = action.payload;
        },

        isFocused(state){

            state.focused = true;
        },

        isBlurred(state){

            state.focused = false;
        }
    }
});

export const { update, isFocused, isBlurred } = searchSlice.actions;
export default searchSlice.reducer;