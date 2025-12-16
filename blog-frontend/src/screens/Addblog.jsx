import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postBlog } from '../slice/Blogslice'
import { getCategory } from '../slice/categorySlice'

function Addblog() {

    const [blog, setBlog] = useState({ title: "", content: "", slug: "", category: "", user: "" })
    const categories = useSelector(state => state.category.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleChange(e) {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(blog)
        dispatch(postBlog(blog))
        navigate("/Blog-Frontend/")
    }

    useEffect(() => {
        dispatch(getCategory())
        const data = localStorage.getItem("user")
        const User = JSON.parse(data)
        setBlog({ ...blog, user: User._id })
    }, [])

    return (
        <div className='container p-5'>
            {/* Intro Row */}
            <div className="row mb-4 ">
                <div className="col-12">
                    <div style={{
                        backgroundColor: 'skyblue',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        <h2>Welcome to the Blog Dashboard</h2>
                        <p>Add a new blog post using the form below</p>
                    </div>
                </div>
            </div>

            {/* Blog Form */}
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="blog-form" style={{
                        // border: '2px solid skyblue',
                        borderRadius: '10px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff'
                    }}>
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder='Enter title' 
                            name='title' 
                            className="form-control my-2 sky-input" 
                        />
                        <textarea 
                            onChange={handleChange} 
                            name="content" 
                            placeholder="Enter content" 
                            className='form-control my-2 sky-input'>
                        </textarea>
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            placeholder='Enter slug' 
                            name='slug' 
                            className="form-control my-2 sky-input" 
                        />
                        <select 
                            onChange={handleChange} 
                            name="category" 
                            className='form-select my-2 sky-input'>
                            {categories.map(el => (
                                <option key={el._id} value={el._id}>{el.title}</option>
                            ))}
                        </select>

                        <input 
                            type="submit" 
                            value="Add Blog" 
                            className='btn Link w-100 my-2' 
                        />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Addblog
