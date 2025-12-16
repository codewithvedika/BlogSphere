import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../slice/userSlices';

function Navbar() {
    const User = useSelector(state => state.user.User);
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Wildflower Meadow Colors
    const colors = {
        background: '#FFFDF6', // Daisy White
        link: '#87CEEB',       // Sky Blue
        linkHover: '#5DADE2',  // Slightly darker Sky Blue
        cta: '#FFD700',        // Buttercup Yellow
        logout: '#DC3545',     // Red for logout
        text: '#333'           // Dark gray text
    };

    return (
        <div style={{ backgroundColor: colors.background  , fontSize:"1.5rem", fontWeight:"bold "}}>
            <nav className="navbar navbar-expand-lg" style={{ padding: '1rem' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" style={{ color: colors.text }} to="/">BLOG</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/about">About</Link>
                            </li>

                            {(User || token) ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/add-blog">Add Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/my-blogs">My Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => { dispatch(logout()); navigate("/Blog-Frontend/login"); }}
                                            className="btn"
                                            style={{ backgroundColor: colors.logout, color: '#fff' }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: colors.link }} to="/Blog-Frontend/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
