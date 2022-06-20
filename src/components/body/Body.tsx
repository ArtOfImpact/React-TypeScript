import { useDispatch, useSelector } from 'react-redux'
import './Body.css'
import Sort from '../sort/Sort'
import { useEffect, useState } from 'react'
import { getPostAC, setSortPostAC, getTotalCountAC } from '../../reducers/BodyText'
import Tabs from '../tabs/Tabs'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Content from './content/Сontent'
import Paginatig from '../pagination/Pagination'
import Preloader from '../preloader/Preloader'

let Body = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://studapi.teachmeskills.by/blog/posts/?limit=6&offset=0`)
            .then(response => {
                dispatch(getPostAC(response.data.results))
                dispatch(getTotalCountAC(response.data.count))
                setLoading(false)
            })
    }, [])

    const dispatch = useDispatch()

    let infoPosts = useSelector((state: any) => state.body.Posts)

    let nightMode = useSelector((state: any) => state.header.nightMode)

    let searchValue = useSelector((state: any) => state.header.search)

    const [selectedSort, setSelectedSort] = useState('')

    const sortPost = (sort: any) => {
        console.log(sort)
        setSelectedSort(sort);
        dispatch(setSortPostAC(sort))
    }



    const filterBody = infoPosts.filter((post: any) => {
        // console.log(post.title)
        // console.log(searchValue)
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    // const filteredPeople = infoPosts.filter((n: any) => n.title.includes(searchValue));

    return (
        <div className={nightMode ? 'Body__black' : 'Body__light'}>
            <div className={nightMode ? 'BodyBlack__name' : 'Body__name'}>
                <span >Blog</span>
            </div>
            <div className='Nav__container'>
                <Sort onChange={sortPost} value={selectedSort} defaultValue='Sorting' options={[
                    { name: 'Name', value: "Title" },
                    { name: 'Creation time', value: "Data" }
                ]} />
                <Tabs nightMode={nightMode} />
            </div>
            <div className='Content__wrap'>
                {!loading ? filterBody.map((el: any, index: any) =>
                    <Content index={index} />
                ) : <Preloader />}
            </div>
            <Paginatig />
        </div>
    )
}

export default Body;

