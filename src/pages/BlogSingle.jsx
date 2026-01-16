import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { getPostBYslug } from '../api/wordpress'

function BlogSingle() {
    const { slug } = useParams();
    const [singlePost, setsinglePost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPostBYslug(slug);
            setsinglePost(data);
            console.log(singlePost);
        };
        fetchPost();
    }, [slug]);

    return (
        <>
            <Header />
            <div className='container my-5'>
                <h2>{singlePost && singlePost[0]?.title?.rendered}</h2>
                <p className='mt-3' dangerouslySetInnerHTML={{ __html: singlePost && singlePost[0]?.content?.rendered }}></p>
            </div>
            <Footer />
        </>
    )
}

export default BlogSingle