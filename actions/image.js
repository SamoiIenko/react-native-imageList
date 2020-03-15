import { ADD_IMAGE } from './types';

export const addImage = imageName => {
    return {
        type: ADD_IMAGE,
        payload: imageName
    }
}