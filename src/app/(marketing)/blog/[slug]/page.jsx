//"use client" //para hooks que se ejecutan del lado del cliente, por lo que hace entender que este codigo debe de ejecutarse del lado del cliente, no del servidor.

import TitlePage from '@/components/TitlePage'
import React from 'react'
import { POST } from '../page'
import Link from 'next/link'

export function generateMetadata({ params }) {
    const post = POST.find((post) => post.slug === params.slug);
    return {
        title: post.title,
        description: post.title + " - Descripción",
    };
}

const Slug = ({ params }) => {
    const post = POST.find((post) => post.slug === params.slug)

    // const router = useRouter();

    return <>
        <TitlePage title={post.title} />
        <p className='text-center'>{post.content}</p>
        <div className="text-center mt-4">
            <Link
                href='/blog'
                className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>
                Volver
            </Link>
        </div>
    </>
}

export default Slug
