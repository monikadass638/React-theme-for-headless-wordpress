import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getALLCAtegories } from '../api/wordpress';
import Footer from '../components/Footer';

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchallCategories = async () => {
            const data = await getALLCAtegories();
            setCategories(data);
        }
        fetchallCategories();

    }, []);
    return (
        <>
            <Header />
            <div className="container my-5">

                <h2>All Categories</h2>
                <div className="row mt-5">
                    {

                        categories.map((category, index) => (
                            <div className='col-md-4 mb-3 cat-item fs-5 ' key={index}>
                                <a href={category.link}>{category.name}</a>
                                <span className='text-muted fs-5 ms-1'>({category.count} Posts)</span></div>
                        ))
                    }
                </div>
            </div>
            <Footer /></>

    )
}

export default Categories