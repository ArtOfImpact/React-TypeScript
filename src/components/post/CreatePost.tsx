import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewPostAC } from '../../reducers/BodyText'
import './CreatePost.css'



let CreatePost = (props: any) => {

    const dispatch = useDispatch()

    let [NewPost, setNewPost] = useState({ date: (new Date()).toLocaleString(), title: '', text: '', img: '', like: 0, disliked: 0 })

    let addPostState = () => {
        dispatch(setNewPostAC(NewPost))
        setNewPost({ date: (new Date()).toLocaleString(), title: '', text: '', img: '', like: 0, disliked: 0 })
        props.setPost(false)
    }

    return (
        <div className="Create__Post">
            <div className='Create__title'>
                <span>Title post</span>
                <input value={NewPost.title} onChange={e => setNewPost({ ...NewPost, title: e.target.value })} />
            </div>
            <div className='Create__text'>
                <span>Description post</span>
                <input value={NewPost.text} onChange={e => setNewPost({ ...NewPost, text: e.target.value })} />
            </div>
            <div className='Create__button'>
                <button onClick={addPostState} > Create</button>
            </div>
        </div>
    )
}

export default CreatePost