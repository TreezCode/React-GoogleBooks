import React from "react";

const Form = ({ query, handleInputChange, handleFormSubmit }) => (
    <form>
        <div className="form-group">
            <label htmlFor="query"><strong>Book</strong></label>
            <input
                className="form-control"
                id="Title"
                type="text"
                value={query}
                placeholder="Search Google"
                name="query"
                onChange={handleInputChange}
                required
            />
        </div>
        <div>
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right"
            >Search
            </button>
        </div>
    </form>
)

export default Form;