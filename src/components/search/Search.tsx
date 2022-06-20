import { useSelect } from '@mui/base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cancel from '../../photo/iconHeader/Icon-Cancel.svg'
import { setSearchAC } from '../../reducers/HeaderSearch';

let Search = (props: any) => {

    const dispatch = useDispatch()

    let searchValue = useSelector((state: any) => state.header.search)

    return (<>
        <input value={searchValue} onChange={e => dispatch(setSearchAC(e.target.value))} className='Input__header' placeholder='Search ...' type='text' />
        <div className='del' onClick={() => props.setShowSearch(!props.showSearch)}><img src={cancel} /></div>
    </>
    )
}

export default Search;