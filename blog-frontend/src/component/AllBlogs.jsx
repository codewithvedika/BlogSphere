import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBlogs } from '../slice/Blogslice'
function AllBlogs({ limit }) {

    const data = useSelector(state => state.blog.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (limit == "none") {
        limit = data.length
    }
    useEffect(() => {
        dispatch(getBlogs())
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">

                    {data.slice(0, limit).map(el => (
                        <div key={el._id} className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src="https://4kwallpapers.com/images/walls/thumbs_2t/22988.jpg" alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">{new Date(el.createdAt).toLocaleDateString('en-GB')}</div>
                                    <h2 className="card-title h4">{el.title}</h2>
                                    <p className="card-text">{el.content}</p>
                                    <button onClick={() => { navigate("/Blog-Frontend/read-blog", { state: el }) }} className="btn Link" href="#!">Read more →</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default AllBlogs
