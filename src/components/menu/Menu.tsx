import './Menu.css'
import nameLogo from '../../photo/iconHeader/AM.svg'
import Dark from '../../photo/iconMenu/Dark.svg'
import activeDark from '../../photo/nightMode/Dark.svg'
import Light from '../../photo/iconMenu/Light.svg'
import activeLight from '../../photo/nightMode/Light.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setNightModeAC } from '../../reducers/HeaderSearch'

let Menu = (props: any) => {

    const dispatch = useDispatch()

    let nightMode = useSelector((state: any) => state.header.nightMode)
    let Users = useSelector((state: any) => state.header.users)

    let changeNightMode = () => {
        if (nightMode === false) {
            dispatch(setNightModeAC(true))
        }
    }

    let changeLightMode = () => {
        if (nightMode === true) {
            dispatch(setNightModeAC(false))
        }
    }

    return (
        <div className='Menu__container'>
            {Users ? <div className='Name__menu'>
                <div className='Background__user'>
                    <img src={nameLogo} />
                </div>
                <span>Artem Malkin</span>
            </div> : null}
            <div className='Home__menu'>
                <span>Home</span>
            </div>
            {Users ? <div className='Add__menu' onClick={() => props.setPost(!props.Post)}>
                <span>Add post</span>
            </div> : null}
            <div className='Emptiness'></div>
            <div className='DL__menu' >
                <div className='DL__L' onClick={changeLightMode} >
                    {nightMode ? <img src={activeLight} /> : <img src={Light} />}
                </div>
                <div className='DL__D' onClick={changeNightMode} >
                    {nightMode ? <img src={activeDark} /> : <img src={Dark} />}
                </div>
            </div>
            <div className='LogOut__menu'>
                {Users ? <span>Log out</span> : <span>Sign ln</span>}
            </div>
        </div>
    )
}

export default Menu;