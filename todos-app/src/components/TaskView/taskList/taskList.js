import React, { useEffect, useState } from "react";

const TaskList = () => {

    const [tasks, setTasks] = useState([1,2]);

    useEffect(()=> {

    },[]);

    return(
        <ul>
            {
                tasks.map(item => {
                    console.log(item);
                    return <li className="liElement">Item</li>
                })
            }
        </ul>
    )
};

export default TaskList;