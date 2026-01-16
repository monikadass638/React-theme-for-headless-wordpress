import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { getPosts } from '../api/wordpress'

function LatestBlogs() {
    const [latestPost, setLatestPost] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {
            const Posts = await getPosts();
            setLatestPost(Posts);
            //console.log(Posts);
        };
        fetchdata();
    }, []);
    return (
        <section>

            <div className="container mt-3 p-0">

                <div className='row'>
                    {
                        latestPost.map((postData, index) => (
                            <div className='col-md-3 my-3' key={index}>

                                <BlogCard post={postData} />
                            </div>

                        ))


                    }
                </div>
            </div>
        </section >
    )
}

export default LatestBlogs