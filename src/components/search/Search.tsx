import React from 'react';
import cancel from '../../photo/iconHeader/Icon-Cancel.svg'

let Search = (props: any) => {

    return (<>
        <input className='Input__header' placeholder='Search ...' type='text' />
        <div className='del' onClick={() => props.setSearch(!props.search)}><img src={cancel} /></div>
    </>
    )
}

export default Search;