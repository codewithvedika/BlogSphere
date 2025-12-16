import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlogs, getBlogs } from '../slice/Blogslice';
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const data = useSelector(state => state.blog.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const obj = localStorage.getItem("user");
  const User = obj ? JSON.parse(obj) : null;

  const colors = {
    background: '#FFFDF6', 
    accent: '#87CEEB',    
    cta: '#FFD700',        
    text: '#333333',
    danger: '#DC3545'
  };

  useEffect(() => {
    if (User) {
      dispatch(getBlogs());
    }
  }, [dispatch, User]);

  const blogs = useMemo(() => {
    if (!User) return [];
    return data.filter(el => el.user?._id === User._id);
  }, [data, User]);

  function editDate(blog) {
    navigate("/Blog-Frontend/update-blog", { state: blog });
  }

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: colors.background,
        padding: '2rem',
        borderRadius: '10px'
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover">
            <thead style={{ backgroundColor: colors.cta, color: '#000' }}>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Slug</th>
                <th>Category</th>
                <th>User</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(el => (
                <tr key={el._id} style={{ borderBottom: `2px solid ${colors.accent}` }}>
                  <td>{el.title}</td>
                  <td>{el.content}</td>
                  <td>{el.slug}</td>
                  <td>{el.category?.title}</td>
                  <td>{el.user?.name}</td>
                  <td>
                    <button
                      className="btn"
                      style={{ backgroundColor: colors.accent, color: '#fff' }}
                      onClick={() => editDate(el)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn"
                      style={{ backgroundColor: colors.danger, color: '#fff' }}
                      onClick={() => dispatch(deleteBlogs(el._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {blogs.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
