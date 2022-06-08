const SET_USERS = 'SET_USERS';
const SET_MENU = 'SET_MENU';
const NIGHT_MODE = 'NIGHT_MODE';
const SEARCH = 'SEARCH';

let initialState = {
    users: 'Artem Malkin',
    hiddenMenu: false,
    nightMode: false,
    search: false,
}


const HeaderSearch = (state = initialState, action: any) => {

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

export default HeaderSearch;

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