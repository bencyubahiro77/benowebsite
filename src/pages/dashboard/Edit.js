import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';


function EditUserForm({ blog }) {
  const [formData, setFormData] = useState({
    title: blog.title,
    desc: blog.desc,
    category: blog.category,
    image: null,
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');

      const updatedBlog = new FormData();
      updatedBlog.append('title', formData.title);
      updatedBlog.append('desc', formData.desc);
      updatedBlog.append('category', formData.category);
      if (formData.image) {
        updatedBlog.append('image', formData.image);
      }

      Swal.fire({
        title: 'Updating blog...',
        icon: 'info',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      await axios.put(`${process.env.REACT_APP_BASE_URL}/blog/${blog._id}`, updatedBlog, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Blog updated',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error updating blog',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
    }
  };

  return (
    <div className="create-blog-page" >
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id="category"
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="coding">Coding</option>
            <option value="sport">Sports</option>
            <option value="others">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="coverPhoto">Cover Photo:</label>
          <input
            id="coverPhoto"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <div className="blogEditor">
            <CKEditor
              editor={ClassicEditor}
              data={formData.desc}
              onChange={(event, editor) => {
                const data = editor.getData();
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  desc: data,
                }));
              }}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" onClick={handleSubmit}>
           Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;
