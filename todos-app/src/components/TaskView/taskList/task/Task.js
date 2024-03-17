import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import '../../TaskView.scss';

const Task = ({item, changeTaskStatus, UpdateTask, DeleteTask}) => {
    const [editing,setEditing] = useState(false);
    const [editedValue,setEditedValue] = useState(item.description);
    const handleChangeCheckbox = (e) => {
        changeTaskStatus(item);
    };
    const handleChangePencilEdit = (e) => {
        setEditing(true);
    };
    const handleChangeSaveEdit = (e) => {
        setEditing(false);
        item.description = editedValue;
        UpdateTask(item);
    };
    const handleTextChange = (e) => {
        setEditedValue(e.target.value);
    };
    const handleChangeTrashDelete = (e) => {
        DeleteTask(item);
    };
    return (
        <>
            {item != null && (
                <div className="my-2 d-flex justify-content-between">
                    {editing ? (
                        <>
                            <div>
                                <input
                                    className="me-5"
                                    type="text"
                                    value={editedValue}
                                    onChange={handleTextChange}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon className="saveIcon cursorToPointer" icon={faSave} onClick={handleChangeSaveEdit} />
                            </div>
                        </>
                        ) : (
                            <>
                                <div>
                                    <input
                                            className="mx-2"
                                            type="checkbox"
                                            checked={item.state}
                                            onChange={handleChangeCheckbox}
                                        />
                                    <label className="me-5">
                                        
                                            {item.description}
                                    </label>
                                </div>
                                <div>
                                    {!item.state && <FontAwesomeIcon className="me-3 cursorToPointer" icon={faPencilAlt} onClick={handleChangePencilEdit} />}
                                    <FontAwesomeIcon className="text-danger cursorToPointer" icon={faTrashAlt} onClick={handleChangeTrashDelete} />
                                </div>
                            </>
                        )}
                </div>
            )}
        </>
    );
};

export default Task;