import React, { useEffect, useState } from "react";
import {getData, postData, deleteData} from '../../utils/Requests';
import Task from "./task/Task";

const TaskList = ({filterValue, filterOption}) => {
    const [tasks, setTasks] = useState(null);
    const [reload,setReload] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            var url = 'Task/GetAllTaskModels';
            if(filterValue.length > 0)
                url += '?textFilter=' + filterValue;
            if(filterOption && filterOption.length > 0 && filterOption != 'Clear')
                url += (filterValue.length == 0 ? '?taskState=' : '&taskState=') + String(filterOption == 'ToDo' ? 0 : 1);
            var data = await getData(url);
            setTasks(data);
        };
        fetchData();
    },[reload, filterValue, filterOption]);

    const changeTaskStatus = (item) => {
        if(!item.state){
            const fetchData = async () => {
                var url = 'Task/ChangeTaskStatus?id=' + item.id;
                await postData(url);
                setReload(!reload);
            };
            fetchData();
        }
    };
    const UpdateTask = (item) => {
        if(!item.state){
            const fetchData = async () => {
                var url = 'Task/UpdateTask';
                await postData(url, item);
                setReload(!reload);
            };
            fetchData();
        }
    };
    const DeleteTask = (item) => {
        const fetchData = async () => {
            var url = 'Task/DeleteTask';
            await deleteData(url, item.id);
            setReload(!reload);
        };
        fetchData();
    };

    return(
        <>
            {tasks != null && (
                <> 
                    <ul className="col-lg-12 col-md-8 col-sm-6 ps-0">
                        {
                            tasks.map((item, index) => {
                                return (
                                    <Task 
                                        key={index} 
                                        item={item} 
                                        changeTaskStatus={changeTaskStatus} 
                                        UpdateTask={UpdateTask} 
                                        DeleteTask={DeleteTask} 
                                    />
                                );
                            })
                        }
                    </ul>
                </>
            )}
        </>
    )
};

export default TaskList;