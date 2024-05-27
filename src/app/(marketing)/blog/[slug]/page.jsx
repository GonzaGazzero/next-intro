import TitlePage from '@/components/TitlePage'
import React from 'react'

const Slug = ({params}) => {
    return <>
        <TitlePage title='Slug' />
        <p className='text-center'>{params.slug}</p>
    </>
}

export default Slug
