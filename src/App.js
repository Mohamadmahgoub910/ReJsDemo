import React, { StrictMode } from 'react'
import Header from './components/Header'



function App() {
  const Title = 'Blog Post'
  const Body = 'This is my blog post'
  const Comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' }
  ]
  // const loading = false
  const showComment = true
  const commentBlock = (<ul>
    {Comments.map((comment, index) => (
      <li key={index} >{comment.text} </li>
    ))}
  </ul>)
  return (
    <StrictMode>
      <>
        <Header />
      </>
    </StrictMode>
  )
}

export default App