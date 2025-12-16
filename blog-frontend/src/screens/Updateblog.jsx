import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getBlogs, updateBlog } from '../slice/Blogslice'
import { getCategory } from '../slice/categorySlice'

function UpdateBlog() {

    const [blog, setBlog] = useState({ _id: "", title: "", content: "", slug: "", category: "" })
    const categories = useSelector(state => state.category.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { state } = useLocation()

    function handleChange(e) {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(blog);
        dispatch(updateBlog(blog))
        console.log(blog);
        
        navigate("/Blog-Frontend/blogs")
    }

    useEffect(() => {
        dispatch(getCategory())
        setBlog({ _id: state._id, title: state.title, content: state.content, slug: state.slug, category: state.category?._id })
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={blog.title} type="text" placeholder='Enter title' name='title' className="form-control my-2" />
                        <textarea onChange={handleChange} value={blog.content} name="content" placeholder="Enter content" className='form-control'></textarea>
                        <input onChange={handleChange} value={blog.slug} type="text" placeholder='Enter slug' name='slug' className="form-control my-2" />
                        <select onChange={handleChange} value={blog.category} name="category" className='form-select'>
                            {categories.map(el => (
                                <option key={el._id} value={el._id} >{el.title}</option>
                            ))}
                        </select>
                        <input type="submit" value="Update" className='btn btn-dark' />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default UpdateBlog