import './SelectedPost.css'
import Сosmonauts from '../../photo/selectedPost/cosmonauts.jpg'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


let SelectedPost = () => {

    let infoPosts = useSelector((state: any) => state.body.Posts)

    const id: any = useParams()
    console.log(id.postId - 1)
    return (
        <div className="SelectedPost">
            <div className="SelectedPost__title">
                <span>{infoPosts[id.postId - 1].title}</span>
            </div>
            <div className="SelectedPost__img">
                <img src={infoPosts[id.postId - 1].image} />
            </div>
            <div className="SelectedPost__text">
                <span>{infoPosts[id.postId - 1].text}</span>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SelectedPost