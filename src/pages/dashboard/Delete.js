import axios from 'axios';
import Swal from 'sweetalert2';

const handleDelete = async (blog, setBlogs) => {
  Swal.fire({
    title: 'Confirm deletion',
    text: `Are you sure you want to delete ${blog.title}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ff9900',
    cancelButtonColor: '#888',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          Swal.fire({
            title: 'Deleting blog...',
            icon: 'info',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });

          await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/blog/${blog._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          Swal.fire({
            title: 'Blog deleted',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
          });

          // Fetch the updated list of blogs from the server
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setBlogs({
            data: response.data,
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Error deleting blog',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  });
};

export default handleDelete;
