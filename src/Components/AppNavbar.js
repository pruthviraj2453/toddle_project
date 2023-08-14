import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import CreateBoard from "./CreateBoard";
import { useAppData } from "../appStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { search, setSearch, activeBoard, setActiveBoard } = useAppData();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        {/* Logo on the left side */}
        {activeBoard && (
          <button
            onClick={() => {
              setActiveBoard(null);
            }}
          >
            <img src="back_arrow.png" alt="back" style={{height:"32px" }}/>
          </button>
        )}
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png" // Replace with the path to your logo image
            alt="Logo"
            height="32"
            className="d-inline-block align-text-top"
          />
        </a>

        {/* Search Bar */}
        <form className="d-flex ms-auto">
          <div className="input-group">
            <input
              className="form-control text-muted"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </form>

        {/* "+ Create new board" button */}
        <button className="btn  ms-2 btn-pink" onClick={() => setOpen(true)}>
          <FaPlus className="me-1" />
          Create new board
        </button>
        <CreateBoard show={open} onClose={() => setOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
