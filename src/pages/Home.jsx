import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
import AboutMe from '../components/AboutMe'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function Home() {
    return (
        <>
            <Header />
            <div className='container my-5 '>
                <Hero />
                <h2>Latest Posts</h2>
                <LatestBlogs />
                <AboutMe />

                <Skills />
                <Contact />
            </div>
            <Footer />
        </>


    )
}

export default Home