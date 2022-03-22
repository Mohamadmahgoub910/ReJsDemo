import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'
function About() {
    return (
        <>
            <Card>
                <h5>About page </h5>
                <Link to='/'>Back</Link>
            </Card>
        </>
    )
}

export default About