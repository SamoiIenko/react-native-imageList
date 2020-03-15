import { createStore, combineReducers } from 'redux';
import imageReducer from './reducers/imageReducer';

const rootReducer = combineReducers({
    images: imageReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

function dispatch(action) {
    this.rootReducer.images = imageReducer(this.rootReducer.images, action);
}


export default configureStore;