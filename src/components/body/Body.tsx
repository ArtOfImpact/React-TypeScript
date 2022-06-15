import { useDispatch, useSelector } from 'react-redux'
import './Body.css'
import Space from '../../photo/iconBody/Space.png'
import icon_horizontal from '../../photo/iconBody/Icon-Horizontal.svg'
import bookmark from '../../photo/iconBody/Bookmark.svg'
import Sort from '../sort/Sort'
import { useState } from 'react'
import { setSortPostAC } from '../../reducers/BodyText'


let Body = () => {

    const dispatch = useDispatch()

    let infoPosts = useSelector((state: any) => state.body.Posts)

    let nightMode = useSelector((state: any) => state.header.nightMode)

    const [selectedSort, setSelectedSort] = useState('')

    const sortPost = (sort: any) => {
        console.log(sort)
        setSelectedSort(sort);
        dispatch(setSortPostAC(sort))
    }

    return (
        <div className={nightMode ? 'Body__black' : 'Body__light'}>
            <Sort onChange={sortPost} value={selectedSort} defaultValue='Sorting' options={[
                { name: 'Name', value: "Title" },
                { name: 'Creation time', value: "Data" }
            ]} />
            {infoPosts.map((post: any, index: number) => {
                return (
                    <div className='Body'>
                        <div className='Body__container'>
                            <div className='Container__info'>
                                <div className='Info__data'><span>{infoPosts[index].date}</span></div>
                                <div className={nightMode ? 'Info__black' : 'Info__title'}><span>{infoPosts[index].title}</span></div>
                                <div className='Info__text'><span>{infoPosts[index].text}</span></div>
                            </div>
                            <div className='Container__img'>
                                <img src={Space} />
                            </div>
                        </div>
                        <div className='Body__icon'>
                            <div className={nightMode ? 'Icon__black' : 'Icon__like'}>
                                <div className='like__container'>
                                    <span>{infoPosts[index].like}</span>
                                </div>
                                <div className='dislike__container'>
                                    <span>{infoPosts[index].disliked}</span>
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
            )}
        </div>
    )
}

export default Body;

