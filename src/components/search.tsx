import React from 'react';
import cancel from '../photo/Icon-Cancel.svg'

let Input = (props: any) => {

    return (<>
        <input className='Input__header' placeholder='Search ...' type='text' />
        <div className='del' onClick={() => props.setSearch(!props.search)}><img src={cancel} /></div>
    </>
    )
}

export default Input;