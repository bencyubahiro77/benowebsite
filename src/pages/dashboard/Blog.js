/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import EditUserForm from './Edit';
import handleDelete from './Delete';
import Links from './links';

function AdminDashboard() {
  const [blogs, setBlogs] = useState({
    data: [],
  });
  const [error, setError] = useState('');
//   const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchBlogs(token);
    }
  }, []);

  const fetchBlogs = async (token) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs({
        data: response.data,
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEditUser = (blog) => {
    setEditingUser(blog);
  };

  const handleDeleteUser = (blog) => {
    handleDelete(blog, setBlogs);
  };

  return (
    <div className="containerx">
      <Links />
      <div className="content">
        <div className="upper">
          {<h2>Blogs</h2>}
        </div>
        {error && <div className="error">{error}</div>}
        {editingUser ? (
          <EditUserForm blog={editingUser} />
        ) : (
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.data.map((blog) => (
                  <tr key={blog._id}>
                    <td data-label="fullname">{blog.fullname}</td>
                    <td data-label="Email">{blog.title}</td>
                    <td data-label="Category">{blog.category}</td>
                    <td data-label="Action" className="action">
                      <button onClick={() => handleEditUser(blog)}>Edit</button>
                      <button className="delete" onClick={() => handleDeleteUser(blog)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
