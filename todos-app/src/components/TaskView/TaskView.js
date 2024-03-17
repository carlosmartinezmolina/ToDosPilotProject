import React, { useState } from "react";
import TaskList from "./taskList/TaskList";
import TaskHeader from './taskHeader/TaskHeader';

const TaskView = ({ChangeComponent}) => {
    const [filterValue, setFiltervalue] = useState('');
    const [filterOption, setFilterOption] = useState(null);
    return(
        <>
            <h2 className="text-start mx-2 mb-4">Tasks</h2>
            <TaskHeader ChangeComponent={ChangeComponent} setFiltervalue={setFiltervalue} setFilterOption={setFilterOption} />
            <TaskList filterValue={filterValue} filterOption={filterOption} />
        </>
    )
};

export default TaskView;