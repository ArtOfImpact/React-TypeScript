import React, { useState } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import nameLogo from '../../photo/iconHeader/AM.svg'
import burgerLogo from '../../photo/iconHeader/Bg.svg'
import User from '../../photo/iconHeader/User.svg'
import SearchLogo from '../../photo/iconHeader/Search.svg'
import Menu from '../menu/Menu';
import cancel from '../../photo/iconHeader/Icon-Cancel.svg'
import Search from '../search/Search';
import CreatePost from '../post/CreatePost';
import { NavLink } from 'react-router-dom';

let Header = () => {

    const [showBurger, setShowBurger] = useState(false)

    const [showSearch, setShowSearch] = useState(false)

    const [createPost, setCreatePost] = useState(false)

    const [search, setSearch] = useState('')

    let Users = useSelector((state: any) => state.header.users)

    let shadowClick = () => {
        setShowBurger(!showBurger)
        setCreatePost(false)
    }

    return (
        <div className="Header">
            <div className='Header__container'>
                <div className='Burger' onClick={shadowClick} >
                    {showBurger ? <img className='Burger__logo' src={cancel} /> :
                        <img className='Burger__logo' src={burgerLogo} />}
                </div>
                <div className='Input__container'>
                    {showSearch ? <Search search={search} setSearch={setSearch} showSearch={showSearch} setShowSearch={setShowSearch} /> : <div></div>}
                </div>
                <div className='Search__container' onClick={() => setShowSearch(!showSearch)} >
                    <img className='Search__logo' src={SearchLogo} />
                </div>
                <div className='User__container'>
                    {Users ? <div className='User__name'><div className='Background__user'><img src={nameLogo} /></div><NavLink to='/SignIn' className='name'>{Users}</NavLink></div> :
                        <img className='User__logo' src={User} />}
                </div>
            </div>
            <div className='MC__container'>
                {showBurger ? <Menu Post={createPost} setPost={setCreatePost} /> : null}
                {createPost ? <CreatePost setPost={setCreatePost} /> : null}
            </div>
        </div>
    );
}

export default Header;
