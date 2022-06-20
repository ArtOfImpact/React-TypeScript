import { useSelect } from '@mui/base';
import { useState } from 'react';
import './Tabs.css'


let Tabs = (props: any) => {

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

    let OneActive = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
    }

    let TwoActive = () => {
        setOne(false);
        setTwo(true);
        setThree(false);

    }

    let ThreeActive = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
    }

    return (
        <div className={props.nightMode ? 'TabsBlack__container' : 'Tabs__container'}>
            <div className='Tabs'>
                <div onClick={OneActive} className={one ? 'TabsActive__one' : 'Tabs__one'}>All</div>
                <div onClick={TwoActive} className={two ? 'TabsActive__two' : 'Tabs__two'}>My favorites</div>
                <div onClick={ThreeActive} className={three ? 'TabsActive__three' : 'Tabs__three'}>Popular</div>
            </div>
            <hr />
        </div>
    )
}

export default Tabs;