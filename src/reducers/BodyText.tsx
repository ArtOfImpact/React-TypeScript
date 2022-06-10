const SET_USERS = 'SET_USERS';
const SET_MENU = 'SET_MENU';
const NIGHT_MODE = 'NIGHT_MODE';
const SEARCH = 'SEARCH';

let initialState = {
    Posts: [
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
        case SET_USERS: {
            return { ...state, count: action.users }
        }
        case SET_MENU: {
            return { ...state, hiddenMenu: action.hiddenMenu }
        }
        case NIGHT_MODE: {
            return { ...state, nightMode: action.nightMode }
        }
        case SEARCH: {
            return { ...state, search: action.search }
        }
        default:
            return state;
    }
}

export default BodyText;

export const setCountAC = (users: any) => {
    return {
        type: SET_USERS, users
    }
}

export const setMenuAC = (hiddenMenu: boolean) => {
    return {
        type: SET_MENU, hiddenMenu
    }
}

export const setNightModeAC = (nightMode: boolean) => {
    return {
        type: NIGHT_MODE, nightMode
    }
}

export const setSearchAC = (search: boolean) => {
    return {
        type: SEARCH, search
    }
}