import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

function Skills() {
    return (
        <section>
            <div className="container my-5">
                <h2>Tech Stack</h2>
                <div className="row mt-4">
                    <div className="col-md-3 mb-3">
                        <div className="skill-card   text-center">
                            <FaReact style={{ marginRight: "8px" }} />
                            React Development
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="skill-card    text-center">
                            <FaHtml5 style={{ marginRight: "8px" }} />
                            HTML
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="skill-card    text-center">
                            <FaWordpress style={{ marginRight: "8px" }} />
                            WordPress
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="skill-card    text-center">
                            <div className="skill-card    text-center">
                                <FaBootstrap style={{ marginRight: "8px" }} />
                                Bootstrap
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <hr className="hr-hero my-5 border-2 opacity-75"></hr>
        </section>
    )
}

export default Skills