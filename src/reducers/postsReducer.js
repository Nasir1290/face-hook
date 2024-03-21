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
            console.log(action.posts)
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

        default:
            return state;
    }
}

export { postsReducer, initialState };