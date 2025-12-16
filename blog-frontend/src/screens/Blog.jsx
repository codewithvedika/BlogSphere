import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Blog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    slug: "",
    category: null,
    createdAt: null,
    user: null
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setBlog({
        title: state.title,
        content: state.content,
        slug: state.slug,
        category: state.category,
        createdAt: state.createdAt,
        user: state.user
      });
    }
  }, [state]);

  // Wildflower Meadow Colors
  const colors = {
    background: '#FFFDF6', // Daisy White
    accent: '#87CEEB',     // Sky Blue
    cta: '#FFD700',        // Buttercup Yellow
    text: '#333333',       // Dark gray
    muted: '#666666'       // Soft gray
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: colors.background }}>
      <div className="row">
        <div className="col-lg-8">
          <article>
            <header className="mb-4">
              <h1 className="fw-bolder mb-1" style={{ color: colors.accent }}>{blog.title}</h1>
              <div className="fst-italic mb-2" style={{ color: colors.muted }}>
                Posted on {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-GB') : ''} by {blog.user?.name}
              </div>
              {blog.category?.title && (
                <span
                  className="badge mb-2"
                  style={{ backgroundColor: colors.cta, color: '#000' }}
                >
                  {blog.category.title}
                </span>
              )}
            </header>

            <figure className="mb-4">
              <img
                className="img-fluid rounded"
                src="src/assets/demon slayer.avif"
                alt={blog.title}
                style={{ border: `3px solid ${colors.accent}` }}
              />
            </figure>

            <section className="mb-5">
              <p className="fs-5 mb-4" style={{ color: colors.text }}>{blog.content}</p>
            </section>
          </article>
        </div>

        {/* Uncomment sidebar widgets if needed */}
        {/* <div className="col-lg-4">Sidebar content</div> */}
      </div>
    </div>
  );
}

export default Blog;
