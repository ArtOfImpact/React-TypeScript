import React from 'react';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuAC, setSearchAC } from '../reducers/headerSearch';
import nameLogo from '../photo/AM.svg'
import burgerLogo from '../photo/Bg.svg'
import User from '../photo/User.svg'
import SearchLogo from '../photo/Search.svg'
import Menu from './menu';
import cancel from '../photo/Icon-Cancel.svg'
import Input from './search';


let Header = () => {

    const dispatch = useDispatch()

    let MenuBurger = useSelector((state: any) => state.header.hiddenMenu)

    let Users = useSelector((state: any) => state.header.users)

    let Search = useSelector((state: any) => state.header.search)

    let activeMenu = () => {
        if (MenuBurger === false) {
            dispatch(setMenuAC(true))
        } else if (MenuBurger === true) {
            dispatch(setMenuAC(false))
        }
    }

    let activeSearch = () => {
        if (Search === false) {
            dispatch(setSearchAC(true))
        } else if (Search === true) {
            dispatch(setSearchAC(false))
        }
    }

    return (
        <div className="Header">
            <div className='Header__container'>
                <div className='Burger' onClick={activeMenu} >
                    {MenuBurger ? <img className='Burger__logo' src={cancel} /> :
                        <img className='Burger__logo' src={burgerLogo} />}
                </div>
                <div className='Input__container'>
                    {Search ? <Input /> : <div></div>}
                </div>
                <div className='Search__container' onClick={activeSearch} >
                    <img className='Search__logo' src={SearchLogo} />
                </div>
                <div className='User__container'>
                    {Users ? <div className='User__name'><div className='Background__user'><img src={nameLogo} /></div><span className='name'>{Users}</span></div> :
                        <img className='User__logo' src={User} />}
                </div>
            </div>
            {MenuBurger ? <Menu /> : null}
        </div>
    );
}

export default Header;
