import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { getPostBYslug } from '../api/wordpress'

function BlogSingle() {
    const { slug } = useParams();
    const [singlePost, setsinglePost] = useState(null);

    const formattedDate = new Date(singlePost && singlePost[0]?.date).toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const CategoryName = singlePost && singlePost[0]?._embedded?.["wp:term"][0]?.map((cat) => cat.name).join(" - ");
    //console.log(CategoryName);

    const media = singlePost && singlePost[0]?._embedded?.["wp:featuredmedia"]?.[0];
    const image =

        media?.media_details?.sizes?.large?.source_url;
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPostBYslug(slug);
            setsinglePost(data);
            console.log(data);


        };
        fetchPost();
    }, [slug]);

    return (
        <>
            <Header />
            <div className='container my-5'>
                <h6>{CategoryName}</h6>
                <h1>{singlePost && singlePost[0]?.title?.rendered}</h1>
                <div className='text-muted fs-6'>
                    <div>{singlePost && singlePost[0]?._embedded?.author[0]?.name} </div>
                    <div>Published on {formattedDate}</div> </div>
                <div className='my-4 post-img-featured'> {image && < a href={singlePost?.[0]?.link}><img src={image} alt={media?.alt_text || "Blog image"} /></a>}</div>
                <p className='mt-3' dangerouslySetInnerHTML={{ __html: singlePost && singlePost[0]?.content?.rendered }}></p>
            </div>
            <Footer />
        </>
    )
}

export default BlogSingle