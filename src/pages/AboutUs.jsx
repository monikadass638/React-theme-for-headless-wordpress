import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAboutPage } from '../api/wordpress';

function AboutUs() {

    const [aboutContent, setAboutContent] = useState("");

    useEffect(() => {

        const fetchAboutcontent = async () => {
            const data = await getAboutPage();
            setAboutContent(data);

        }
        fetchAboutcontent();
    }, []);

    return (
        <>
            <Header />
            <div className="container my-5">
                <h2>About Us</h2>
                <div className='mt-4' dangerouslySetInnerHTML={{ __html: aboutContent[0]?.content?.rendered }}></div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs