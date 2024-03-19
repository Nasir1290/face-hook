import { actions } from "../actions";

const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null,
    avatar:null
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

        case actions.profile.USER_DATA_EDITED:
            return {
                ...state,
                loading: false,
                user: action.data,
            }

        case actions.profile.IMAGE_UPDATED:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user, avatar: action.data.avatar,
                }
            }

        case actions.profile.DATA_FETCHED_EROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            }

        default:
            return state;

    }
};


export { profileReducer, initialState };