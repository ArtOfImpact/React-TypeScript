const SET_NEW_POST = 'SET_NEW_POST';
const SORT_POST = 'SORT_POST';
const GET_POST = 'GET_POST';
const GET_TOTALCOUNT = 'GET_TOTALCOUNT';


let initialState = {
    Posts: [],
    TotalCount: '',

}


const BodyText = (state = initialState, action: any) => {

    switch (action.type) {
        case GET_POST: {
            return { ...state, Posts: action.posts }
        }
        case GET_TOTALCOUNT: {
            return { ...state, TotalCount: action.Count }
        }
        // case SET_NEW_POST: {
        //     let copyPost = { ...state };
        //     copyPost.Posts = [...state.Posts];
        //     copyPost.Posts.unshift(action.NewPost);
        //     return copyPost;
        // }
        case SORT_POST: {
            let copyPost = { ...state };
            copyPost.Posts = [...state.Posts];
            copyPost.Posts.sort((a: any, b: any) => a[action.sort].localeCompare(b[action.sort]))
            return { ...state, Posts: copyPost.Posts };
        }
        default:
            return state;
    }
}

export default BodyText;

export const setNewPostAC = (NewPost: any) => {
    return {
        type: SET_NEW_POST, NewPost
    }
}

export const setSortPostAC = (sort: any) => {
    return {
        type: SORT_POST, sort
    }
}

export const getPostAC = (posts: any) => {
    return {
        type: GET_POST, posts
    }
}

export const getTotalCountAC = (Count: any) => {
    return {
        type: GET_TOTALCOUNT, Count
    }
}

