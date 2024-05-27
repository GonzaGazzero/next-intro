import TitlePage from '@/components/TitlePage'
import Link from 'next/link';
import React from 'react'

export const POST = [
    {
        id: 1,
        title: "Post 1",
        slug: "post-1",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 2,
        title: "Post 2",
        slug: "post-2",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 3,
        title: "Post 3",
        slug: "post-3",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
];

const Blog = () => {
    return <>
        <TitlePage title='Blog' />
        <main className="container mx-auto grid gap-5">
            {POST.map((post) => (
                <div
                    key={post.id}
                    className="p-5 rounded-md shadow"
                >
                    <h2 className="text-xl font-bold mb-5">{post.title}</h2>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950 transition-all duration-300"
                    >
                        Más información ...
                    </Link>
                </div>
            ))}
        </main>
    </>
}

export default Blog
