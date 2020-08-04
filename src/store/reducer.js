import * as ActionsTypes from './actions';

const intialState = {
    posts: []
}

const reducer = (state = intialState, action) => {
    switch(action.type) {

        case ActionsTypes.STORE_ALL_POST: {
            return { 
                ...state,
                posts: (action.postsList && action.postsList.length) ? action.postsList : state
            }
        }

        case ActionsTypes.EDIT_POST: {
            const {selectedIndex, title, body } = action.payload;
            const posts = [...state.posts];
            posts[selectedIndex].title = title;
            posts[selectedIndex].body = body;
            return {
                ...state,
                posts: posts
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;