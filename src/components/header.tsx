import React, { useState } from 'react';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import nameLogo from '../photo/AM.svg'
import burgerLogo from '../photo/Bg.svg'
import User from '../photo/User.svg'
import SearchLogo from '../photo/Search.svg'
import Menu from './menu';
import cancel from '../photo/Icon-Cancel.svg'
import Input from './search';


let Header = () => {

    const [showBurger, setShowBurger] = useState(false)

    const [showSearch, setShowSearch] = useState(false)

    let Users = useSelector((state: any) => state.header.users)

    return (
        <div className="Header">
            <div className='Header__container'>
                <div className='Burger' onClick={() => setShowBurger(!showBurger)} >
                    {showBurger ? <img className='Burger__logo' src={cancel} /> :
                        <img className='Burger__logo' src={burgerLogo} />}
                </div>
                <div className='Input__container'>
                    {showSearch ? <Input search={showSearch} setSearch={setShowSearch} /> : <div></div>}
                </div>
                <div className='Search__container' onClick={() => setShowSearch(!showSearch)} >
                    <img className='Search__logo' src={SearchLogo} />
                </div>
                <div className='User__container'>
                    {Users ? <div className='User__name'><div className='Background__user'><img src={nameLogo} /></div><span className='name'>{Users}</span></div> :
                        <img className='User__logo' src={User} />}
                </div>
            </div>
            {showBurger ? <Menu /> : null}
        </div>
    );
}

export default Header;
