import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CreatePost = ({ onClose, onSave, show }) => {
  const [postImage, setPostImage] = useState(null);
  const [postText, setPostText] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can add further validations or image processing if needed
    setPostImage(file);
  };

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSave = () => {
    // Save the post data (image and text) to your data store or API
    onSave({
      image: postImage,
      text: postText,
    });
    // Close the modal after saving
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Image Input */}
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {/* Text Input */}
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your post text here..."
            value={postText}
            onChange={handleTextChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePost;
