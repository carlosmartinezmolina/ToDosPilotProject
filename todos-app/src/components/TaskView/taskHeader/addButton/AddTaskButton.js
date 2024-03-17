import React from "react";

const AddTaskButton = ({ChangeComponent}) => {
    const handlebuttonClick = () => {
        ChangeComponent('AddTaskView');
    }
    return (
        <div>
            <button className="btn btn-success" onClick={handlebuttonClick}>Add</button>
        </div>
    );
};

export default AddTaskButton;