import React from "react";
import "./Form.css";

const Form = ({ title, handleInputChange, handleFormSubmit }) => (
    <>
        <form>
            <div className="form-group">
                <div className="mb-1"><small>Book Title:</small></div>
                <input
                    className="form-control"
                    id="Title"
                    type="text"
                    value={title}
                    placeholder="Search Google"
                    name="title"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="d-flex justify-content-end">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger"
                >Search
                </button>
            </div>
        </form>
    </>
);

export default Form;