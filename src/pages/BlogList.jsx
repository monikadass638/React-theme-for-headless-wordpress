import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LatestBlogs from '../components/LatestBlogs'
import { getallPosts } from '../api/wordpress';
import BlogCard from '../components/BlogCard';

function BlogList() {
    const [allPosts, setallPosts] = useState([]);

    useEffect(() => {
        const fetchallposts = async () => {
            const response = await getallPosts();
            setallPosts(response);
        }
        fetchallposts();

    }, []);

    return (
        <>
            <Header />
            <section>
                <div className='container my-5'>
                    <h2>Blog List</h2>
                    <div className="row my-5">
                        {
                            allPosts.map((postData, index) => (
                                <div className='col-md-3 mb-3' key={index}>
                                    <BlogCard post={postData} />
                                </div>
                            ))
                        }

                    </div>
                </div>


            </section >
        </>


    )
}

export default BlogList