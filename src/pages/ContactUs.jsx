import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getContactPage } from '../api/wordpress'

function ContactUs() {
    const [contactContent, setcontactContent] = useState("");

    useEffect(() => {
        const fetchContactcontent = async () => {
            const data = await getContactPage();
            setcontactContent(data)
            //console.log(data);
        }
        fetchContactcontent();
    }, []);
    return (
        <>
            <Header />
            <div className='container my-5'>

                {/* <h2>{contactContent[0]?.title?.rendered}</h2> */}
                <p dangerouslySetInnerHTML={{ __html: contactContent[0]?.content?.rendered }}></p>

            </div >
            <Footer />
        </>

    )
}

export default ContactUs