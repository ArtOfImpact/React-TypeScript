import { useDispatch, useSelector } from 'react-redux'
import './Content.css'
import icon_horizontal from '../../../photo/iconBody/Icon-Horizontal.svg'
import bookmark from '../../../photo/iconBody/Bookmark.svg'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


let Content = (props: any) => {

    let nightMode = useSelector((state: any) => state.header.nightMode)

    let infoPosts = useSelector((state: any) => state.body.Posts)

    return (
        <div className='Body'>
            <div className='Body__container'>
                <div className='Container__info'>
                    <div className='Info__data'><span>{infoPosts[props.index].date}</span></div>
                    <div className={nightMode ? 'Info__black' : 'Info__title'}>
                        <NavLink to={`/SelectedPost/${infoPosts[props.index].id}`}>{infoPosts[props.index].title}</NavLink>
                    </div>
                    <div className='Info__text'><span>{infoPosts[props.index].text}</span></div>
                </div>
                <div className='Container__img'>
                    <img src={infoPosts[props.index].image} />
                </div>
            </div>
            <div className='Body__icon'>
                <div className={nightMode ? 'Icon__black' : 'Icon__like'}>
                    <div className='like__container'>
                        <span>{infoPosts[props.index].like}</span>
                    </div>
                    <div className='dislike__container'>
                        <span>{infoPosts[props.index].disliked}</span>
                    </div>
                </div>
                <div className='Icon__menu'>
                    <img src={bookmark} />
                    <img src={icon_horizontal} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Content;