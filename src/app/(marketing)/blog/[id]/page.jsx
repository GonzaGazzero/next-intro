import TitlePage from '@/components/TitlePage'
import React from 'react'

const id = ({params}) => {
    return <>
        <TitlePage title='Id' />
        <p className='text-center'>{params.id}</p>
    </>
}

export default id
