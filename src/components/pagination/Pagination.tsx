import { useEffect, useState } from 'react';
import { Pagination, Stack, Link } from '@mui/material';
import axios from 'axios';
import React from 'react';
import './Pagination.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPostAC } from '../../reducers/BodyText';



let Paginatig = () => {

    const dispatch = useDispatch()

    let [Page, setPage] = useState(0)

    if (Page === 1) {
        setPage(0)
    }

    let infoPosts = useSelector((state: any) => state.body.Posts)

    let Count = useSelector((state: any) => state.body.TotalCount)

    let totalCount = Math.ceil(Count / 6)

    let Num = 0

    if (Page === 0) {
        Num += 1
    } else {
        Num = Page
    }

    useEffect(() => {
        axios.get(`https://studapi.teachmeskills.by/blog/posts/?limit=6&offset=${Page}`)
            .then(response => {
                dispatch(getPostAC(response.data.results))
            });
    }, [Page])

    return (
        <div className='pagination'>
            <Stack spacing={2}>

                <Pagination
                    color="primary"
                    shape="rounded"
                    count={totalCount}
                    page={Num}
                    onChange={(_, num) => setPage(num)}
                />

            </Stack>
        </div>
    )
}

export default Paginatig;