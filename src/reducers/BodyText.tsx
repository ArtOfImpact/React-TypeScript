const SET_NEW_POST = 'SET_NEW_POST';
const SORT_POST = 'SORT_POST';

let initialState = {
    Posts: [
        {
            date: '10.06.2022',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            img: '',
            like: 15,
            disliked: 32,
        },
        {
            date: '10.06.2022',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            img: '',
            like: 0,
            disliked: 0,
        },
        {
            date: '10.06.2022',
            title: 'Astronauts prepare for new solar arrays',
            text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday.',
            img: '',
            like: 0,
            disliked: 0,
        },
    ]
}


const BodyText = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_NEW_POST: {
            let copyPost = { ...state };
            copyPost.Posts = [...state.Posts];
            copyPost.Posts.unshift(action.NewPost);
            return copyPost;
        }
        case SORT_POST: {
            let copyPost = { ...state };
            copyPost.Posts = [...state.Posts];
            copyPost.Posts.sort((a: any, b: any) => a[action.sort].localeCompare(b[action.sort]))
            return
        }
        default:
            return state;
    }
}
debugger;
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
