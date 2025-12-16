import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../slice/Blogslice'
import { Link, useNavigate } from 'react-router-dom'
import AllBlogs from '../component/AllBlogs'
import Expertise from '../component/Expertise'

function Home() {

    const data = useSelector(state => state.blog.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const token = localStorage.getItem("token")

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    return (
        <div className="container-fluid">
            <Hero title="Your Gateway to the Entertainment World." detail="All About Entertainment. News, Reviews, and Anime Culture." />
            <div className="row">

                <div className="row">
                    <div className=" container">
                        <h2>Blogs</h2>
                        <AllBlogs limit={4} />
                    </div>
                </div>
                <div className="row">
                    <Expertise/>
                </div>

                { (!token) ? (
                <div className="row">

                    <div className="container my-5 d-flex justify-content-center">
                        <div className="card shadow-lg text-center p-4"  >
                            <div className="card-body">
                                <h4 className="card-title mb-2">Unlock More Features</h4>
                                <p className="card-text text-muted mb-4">
                                    Login or create an account to access exclusive content, save posts, and more.
                                </p>

                                <div className="row">
                                    <Link className='btn Link col-md-4' to={"/Blog-Frontend/login"}>| Login </Link>

                                    <Link className='btn Link col-md-4' to={"/Blog-Frontend/login"}>| Sign Up </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ): (<span> </span>)}
            </div>
        </div>
    )
}

export default Home