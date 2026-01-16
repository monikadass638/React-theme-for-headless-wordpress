import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
import AboutMe from '../components/AboutMe'
import Header from "../components/Header"

function Home() {
    return (
        <>
            <Header />
            <div className='container my-5 '>
                <h2>Latest Posts</h2>
                <LatestBlogs />
                <AboutMe />
            </div>
        </>


    )
}

export default Home