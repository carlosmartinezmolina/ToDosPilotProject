import React, { useState } from "react";
import {getData, postData, deleteData} from '../utils/Requests';

const AddTaskView = ({ChangeComponent}) => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (description.trim() === '') {
            setError('Description is required');
        } else {
            const fetchData = async () => {
                var url = 'Task/AddTask';
                await postData(url, {
                    description: description
                });
            };
            fetchData();
            ChangeComponent('TaskView');
        }
    };
    const handlebuttonClick = () => {
        ChangeComponent('TaskView');
    };
    return(
        <>
            <h2 className="text-start me-2 mb-4">Add New Task</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group col-lg-12 col-md-8 col-sm-6 text-start">
                        <h4 className="my-3">Task Description:</h4>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {error && <div className="text-danger">{error}</div>}
                    </div>
                    <div className="container d-flex justify-content-end mt-3 col-lg-12 col-md-8 col-sm-6">
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                        <button className="btn btn-secondary text-end" onClick={handlebuttonClick}>Get back To List</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default AddTaskView;