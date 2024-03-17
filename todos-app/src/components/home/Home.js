import React, { useState } from "react";
import Taskview from '../taskView/TaskView';
import AddTaskView from '../addTaskView/AddTaskView';

const Home = () => {
    const [component, setComponent] = useState('TaskView');
    const ChangeComponent = (component) => {
        setComponent(component);
    };
    return(
        <div className="mx-5">
            <h1 className="my-3">To-Dos App</h1>
                <>
                    {component == 'TaskView' && <Taskview ChangeComponent={ChangeComponent} />}
                    {component == 'AddTaskView' && <AddTaskView ChangeComponent={ChangeComponent} />}
                </>
        </div>
    )
};

export default Home;