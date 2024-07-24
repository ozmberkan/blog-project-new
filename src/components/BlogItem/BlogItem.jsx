import React, { useState } from "react";
import { toast } from "react-toastify";
import EditArea from "../EditArea/EditArea";
import BlogArea from "../BlogArea/BlogArea";

const BlogItem = ({ blog, data, setData }) => {
  const { blogImg, category, id, authorName, authorImg, date, title, content } =
    blog;

  const [editMode, setEditMode] = useState(false);
  const [editedBlog, setEditedBlog] = useState({
    title,
    content,
    date,
    authorName,
    category,
    authorImg,
  });

  const deleteBlog = (id) => {
    const deletedBlog = data.filter((blog) => blog.id != id);
    setData(deletedBlog);
    toast.success("Blog Başarıyla Silindi.");
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({
      ...editedBlog,
      [name]: value,
    });
  };

  const saveBlog = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...editedBlog } : item
    );
    setData(updatedData);
    setEditMode(false);
    toast.success("Blog Başarıyla Güncellendi.");
  };

  return (
    <>
      {editMode ? (
        <EditArea
          editedBlog={editedBlog}
          handleEditChange={handleEditChange}
          saveBlog={saveBlog}
          blogImg={blogImg}
          setEditMode={setEditMode}
        />
      ) : (
        <BlogArea
          deleteBlog={deleteBlog}
          blog={blog}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
};

export default BlogItem;
