import { ADD_IMAGE } from '../actions/types';

const initialState = { 
    images: []
};

const imageReducer = (state = initialState, action) => {
    console.log('ok', action);
    switch(action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                images: action.payload
            };

            default:
                return state;
    }
}

export default imageReducer;