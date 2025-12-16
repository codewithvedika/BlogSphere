import React from 'react'
import Card from '../component/Card'
import AllBlogs from '../component/AllBlogs'

function Service() {
  return (
    <div className='container'>
      <div className="row">
        <div className="card my-3 text-center fw-bold">
          <p>Welcome to our blog where we share insights, tutorials, and the latest updates.</p>
          <p>Insights, stories, and updates from our team.</p>
        </div>
      </div>
      <div className="row">
        <AllBlogs limit={"none"} />
      </div>

    </div>
  )
}

export default Service