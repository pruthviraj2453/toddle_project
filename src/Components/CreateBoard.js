import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { COLORS, useAppData } from "../appStore";
import { getRandomId } from "../App";

const CreateBoard = ({ onClose, onSave, show, data, isEdit = false }) => {
  const [boardName, setBoardName] = useState("");
  const [selectedColor, setSelectedColor] = useState(Object.keys(COLORS)[0]);
  const { boards, setBoards } = useAppData();

  useEffect(() => {
    if (!isEdit) {
      setBoardName("");
      setSelectedColor(Object.keys(COLORS)[0]);
    } else {
      if (isEdit && data) {
        setBoardName(data.name);
        setSelectedColor(data.color);
      }
    }
  }, [isEdit, data, show]);

  const handleBoardNameChange = (event) => {
    setBoardName(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSave = () => {
    if (isEdit) {
      setBoards((prev) => {
        const newDtata = prev;
        const index = newDtata.findIndex((item) => item.id === data?.id);
        newDtata[index].name = boardName;
        newDtata[index].color = selectedColor;
        return newDtata;
      });
    } else {
      setBoards((prev) => {
        return [
          ...prev,
          { id: getRandomId(), name: boardName, color: COLORS[selectedColor] },
        ];
      });
    }

    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Add a name for your board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Places around the world"
            value={boardName}
            onChange={handleBoardNameChange}
          />
        </div>
        <div className="mb-3 mt-4">
          <h4>Select post colour</h4>
          <p>Here are some templates to help you get started</p>
          <div id="colorSelect" className="d-flex">
            {Object.keys(COLORS).map((color) => (
              <button
                key={color}
                className={`btn btn-circle ${
                  selectedColor === color ? "border border-black" : ""
                }`}
                style={{ backgroundColor: COLORS[color] }}
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" onClick={handleSave} className="btn-pink">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBoard;
