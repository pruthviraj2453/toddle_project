import React from "react";
import "./MyPost";

const MyPost = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      imageSrc: "study_logo.png",
      content:
        "Hello this is my study day",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="post-card">
              <img src={post.imageSrc} className="post-image" alt={post.title} />
              <div className="post-text">
                <h5 className="post-title">{post.title}</h5>
                <p className="post-content">{post.content}</p>
              </div>
              <div className="post-actions">
                <button className="post-action-btn">Like</button>
                <button className="post-action-btn">Bookmark</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
