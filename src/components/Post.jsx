import React from 'react'
import Card from '../shared/Card'
import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
    const params = useParams()
    const navigate = useNavigate()
    const status = 200
    if (status === 404) {
        return <Navigate to='/notfound' />
    }
    const GotoAbout = () => {
        navigate('/about')
    }
    return (
        <>
            <Card>
                <div className="center">Posts</div>
                <p>With ID {params.id} and Name {params.name} </p>
                <button onClick={GotoAbout}>Click</button>
                <Routes>
                    <Route path='/show' element={<p>Hello World</p>} />
                </Routes>
            </Card>
        </>
    )
}

export default Post