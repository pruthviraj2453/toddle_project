import React, { useState } from "react";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";
import { COLORS, useAppData } from "../appStore";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CreateBoard from "./CreateBoard";

const MyBoardItems = ({ boards, onDelete }) => {
  const { search, setActiveBoard, board } = useAppData();
  const [edit, setEdit] = useState(null);

  return (
    <>
      <div className="row">
        {boards
          ?.filter((board) => {
            if (search?.length > 0) {
              return board.name
                ?.toLocaleLowerCase()
                .includes(search?.toLocaleLowerCase());
            } else {
              return true;
            }
          })
          .map((board, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              onClick={() => {
                setActiveBoard(board);
              }}
            >
              <div className="d-flex justify-content-between border rounded align-items-center">
                <div
                  className="card-left"
                  style={{ backgroundColor: board.color, flex: 2 }}
                ></div>
                <div
                  className="card-right py-4 px-2 d-flex"
                  style={{ flex: 5 }}
                >
                  <div className="board-name text-left">{board.name}</div>
                </div>
                <div className="menu-icon" style={{ flex: 1 }}>
                  <DropdownButton
                    menuAlign="right"
                    title={<FaEllipsisV />}
                    variant="link"
                    id="dot-menu-dropdown"
                    color="secondary"
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setEdit(board);
                      }}
                      color="secondary"
                      className="dot-menu-dropdown-item"
                    >
                      <FaPencilAlt /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => onDelete(board)}
                      color="secondary"
                      className="dot-menu-dropdown-item"
                    >
                      <FaTrash /> Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          ))}
      </div>
      <CreateBoard
        show={edit ? true : false}
        onClose={() => setEdit(null)}
        isEdit={true}
        data={edit}
      />
    </>
  );
};

const MyBoards = () => {
  const { boards, setBoards, activeBoard } = useAppData();

  const handleDelete = (board) => {
    setBoards((prevBoards) =>
      prevBoards.filter((item, i) => item.id !== board.id)
    );
  };

  if (activeBoard) {
    return (
      <div
        style={{ backgroundColor: activeBoard?.color, flex: 1, height: "900px" }}
        className="active-board"
      >
        <div className="container">
          <h2 className="pt-3 ">{activeBoard?.yourPosts}</h2>
          <h2>Your Boards</h2>
          <div style={{marginTop:"250px",textAlign:"center"}}><img src='study_logo.png' />
          <h3>Nothing here yet</h3>
          <p>Create you first post by clicking on the "+" button above</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mt-3">My Boards</h2>
      <MyBoardItems boards={boards} onDelete={handleDelete} />
    </div>
  );
};

export default MyBoards;
