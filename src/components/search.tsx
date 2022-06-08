import React from 'react';
import cancel from '../photo/Icon-Cancel.svg'

let Input = () => {

    let NewPost: any = React.createRef();

    let onPostChange = () => {
        NewPost.current.value = ''

    }

    return (<>
        <input className='Input__header' placeholder='Search ...' type='text' ref={NewPost} />
        <div className='del'><img src={cancel} onClick={onPostChange} /></div>
    </>
    )
}

export default Input;