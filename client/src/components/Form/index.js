import React from "react";

const Form = ({ title, handleInputChange, handleFormSubmit }) => (
    <>
        <form>
            <div className="form-group">
                <label htmlFor="Title"><strong>Book</strong></label>
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
            <div>
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