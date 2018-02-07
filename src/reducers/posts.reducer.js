import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function (state= { }, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state }; 
            // newState[post.id] = post;
            // return newState;
            //the below line is equivalent to the above commented lines.
            return { ...state, [action.payload.data.id] : action.payload.data }

        default :
            return state;
    }
}

