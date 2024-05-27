import TitlePage from '@/components/TitlePage'
import React from 'react'

const Id = ({params}) => {
    return <>
        <TitlePage title='Id' />
        <p className='text-center'>{params.id}</p>
    </>
}

export default Id