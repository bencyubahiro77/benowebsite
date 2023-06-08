import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [content, setContent] = useState('');
  const [publishing, setPublishing] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  const handleContentChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setPublishing(true);

      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', title);
      formData.append('desc', content);
      formData.append('category', category);
      formData.append('image', coverPhoto);

      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}blog`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Blog Created Successfully',
        showConfirmButton: true,
        timer: 1500,
      });

      // Reset form values
      setTitle('');
      setCategory('');
      setCoverPhoto(null);
      setContent('');

      // Navigate to /blog
      navigate('/blog');
    } catch (error) {
      console.error('Error creating blog:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error creating blog',
        showConfirmButton: true,
      });
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="create-blog-page">
      <h1>Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the title of your blog"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="coding">Coding</option>
            <option value="sport">Sports</option>
            <option value="others">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="coverPhoto">Cover Photo:</label>
          <input id="coverPhoto" type="file" onChange={handleCoverPhotoChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <div className="blogEditor">
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={handleContentChange}
              required
            />
          </div>
        </div>
        <button type="submit" disabled={publishing}>
          {publishing ? 'Publishing...' : 'Publish'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
