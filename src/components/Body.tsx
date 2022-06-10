import { useDispatch, useSelector } from 'react-redux'
import './Body.css'
import Space from '../photo/Space.png'
import like from '../photo/like.svg'
import dislike from '../photo/dislike.svg'
import icon_horizontal from '../photo/Icon-Horizontal.svg'
import bookmark from '../photo/Bookmark.svg'


let Body = () => {

    let infoPosts = useSelector((state: any) => state.body.Posts)

    return (
        <div>
            {infoPosts.map((post: any, index: number) => {
                return (
                    <div className='Body'>
                        <div className='Body__container'>
                            <div className='Container__info'>
                                <div className='Info__data'><span>{infoPosts[index].date}</span></div>
                                <div className='Info__title'><span>{infoPosts[index].title}</span></div>
                                <div className='Info__text'><span>{infoPosts[index].text}</span></div>
                            </div>
                            <div className='Container__img'>
                                <img src={Space} />
                            </div>
                        </div>
                        <div className='Body__icon'>
                            <div className='Icon__like'>
                                <img src={like} />
                                <span>{infoPosts[index].like}</span>
                                <img src={dislike} />
                                <span>{infoPosts[index].disliked}</span>
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
            )}
        </div>
    )
}

export default Body;

