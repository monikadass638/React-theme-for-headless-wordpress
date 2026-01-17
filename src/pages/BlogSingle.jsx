import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { getPostBYslug } from '../api/wordpress'

function BlogSingle() {
    const { slug } = useParams();
    const [singlePost, setsinglePost] = useState(null);
    const media = singlePost && singlePost[0]?._embedded?.["wp:featuredmedia"]?.[0];
    const image =

        media?.media_details?.sizes?.large?.source_url;
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPostBYslug(slug);
            setsinglePost(data);


        };
        fetchPost();
    }, [slug]);

    return (
        <>
            <Header />
            <div className='container my-5'>
                <h2>{singlePost && singlePost[0]?.title?.rendered}</h2>
                <div className='my-4 post-img-featured'> {image && < a href={singlePost.link}><img src={image} alt={media?.alt_text || "Blog image"} /></a>}</div>
                <p className='mt-3' dangerouslySetInnerHTML={{ __html: singlePost && singlePost[0]?.content?.rendered }}></p>
            </div>
            <Footer />
        </>
    )
}

export default BlogSingle