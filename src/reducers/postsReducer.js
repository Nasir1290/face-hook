import { actions } from "../actions"

const initialState = {
    posts: [],
    loading: false,
    error: null
}

const postsReducer = (state, action) => {

    switch (action.type) {
        case actions.posts.DATA_FETCHING:
            return {
                ...state,
                loading: true
            }
        case actions.posts.DATA_FETCHED:
            return {
                ...state,
                posts: action.posts,
                loading: false
            
            }

        case actions.posts.DATA_FETCHED_EROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
            
            case actions.posts.DATA_EDITED:
                return {
                    ...state,
                    loading: false,
                    posts:[...action.posts,actions.data]
                }
            case actions.posts.DATA_EDITED:
                return {
                    ...state,
                    loading: false,
                    posts:action.data,
                }


        default:
            return state;
    }
}

export { postsReducer, initialState };