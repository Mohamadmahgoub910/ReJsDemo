import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AboutIconLink() {
    return (
        <>
            <div className="about-link">
                <Link to={{
                    pathname: '/about',
                    // search: '?sort=name',
                    hash: '#about'
                }}>
                    <FaQuestion size={25} />
                </Link>
            </div>
        </>
    )
}

export default AboutIconLink