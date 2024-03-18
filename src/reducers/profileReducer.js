import { actions } from "../actions";

const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING:
            return {
                ...state,
                loading: true,
            }

        case actions.profile.DATA_FETCHED:
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts,
            }
        default:
            {
                return state;
            }

    }
};


export { profileReducer, initialState };