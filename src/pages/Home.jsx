import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
import AboutMe from '../components/AboutMe'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

function Home() {
    return (
        <>
            <Header />
            <div className='container my-5 '>
                <Hero />
                <h2>Latest Posts</h2>
                <LatestBlogs />
                <AboutMe />
                <hr className="hr-hero my-5 border-2 opacity-75"></hr>
                <Skills />
            </div>
            <Footer />
        </>


    )
}

export default Home