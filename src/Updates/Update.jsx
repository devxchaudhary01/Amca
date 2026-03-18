import React from 'react'
import "./update.css"
import { Link } from 'react-router-dom'
import heroImg from '../assets/inst-img.png'

const Update = () => {

    const blogs = [
        {
            title: "AHU Training at Amca Industries",
            date: "Jul 14, 2025 | Events",
            text: "Amca Industries’s annual Sales Meet took place from 3rd–5th July 2025 at Kalasagar Hotel, bringing together 20–25 team members from across India. The event...",
            path:"/ahu-blog"
        },
        {
            title: "Research Paper on Transforming Export Competitiveness",
            date: "Jul 11, 2025 | News",
            text: "This study investigates the impact of technological upgradation and digitalization on the export competitiveness of India’s Heating, Ventilation,...",
            path:"/research-blog"
        },
        {
            title: "Amca Industries Honoured at Fortuna Global Excellence Awards 2025",
            date: "May 15, 2025 | News",
            text: "Amca Industries was recognised as the Innovative Company of the Year (Manufacturing – Business Leaders), while our MD, Mr. Sandeep Jaisinghani, received the...",
            path:"/awards-blog"
        },
    ];
    return (
        <>
            <section className='main'>
                <img src={heroImg} alt="fan img" />


                <div className="waves">

                    <svg viewBox="0 0 1440 200" className="wave layer1">
                        <path d="M0,120 C300,200 1100,0 1440,120 L1440,200 L0,200 Z" />
                    </svg>

                    <svg viewBox="0 0 1440 200" className="wave layer2">
                        <path d="M0,140 C350,210 1100,40 1440,140 L1440,200 L0,200 Z" />
                    </svg>

                    <svg viewBox="0 0 1440 200" className="wave layer3">
                        <path d="M0,160 C400,230 1100,80 1440,160 L1440,200 L0,200 Z" />
                    </svg>

                </div>
            </section>

        

            <div className="blogs-page">

                <div className="blogs-container">

                    <h1 className="blogs-title">Blogs</h1>

                    <div className="blogs-grid">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-card">

                                <h3 className="blog-heading">{blog.title}</h3>

                                <p className="blog-date">{blog.date}</p>

                                <p className="blog-text">{blog.text}</p>

                                <Link to={blog.path} className="read-more">read more</Link>

                            </div>
                        ))}
                    </div>

                    <p className="older-entry">« Older Entries</p>

                </div>

            </div>
        </>
    )
}

export default Update
