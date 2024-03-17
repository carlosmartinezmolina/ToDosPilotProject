import React, { useEffect, useState } from "react";
import AddTaskButton from './addButton/AddTaskButton';
import FilterButton from './filterButton/FilterButton';
import SearchInput from "./searchInput/SearchInput";
import ClearAllButton from './clearAllButton/ClearAllButton';

const TaskHeader = ({ChangeComponent, setFiltervalue, setFilterOption}) => {
    

    return(
        <div className="my-3 col-lg-12 col-md-8 col-sm-6 d-flex justify-content-between">
            <AddTaskButton ChangeComponent={ChangeComponent} />
                <div className="d-flex">
                    <SearchInput setFiltervalue={setFiltervalue} />
                    <FilterButton setFilterOption={setFilterOption} />
                    <ClearAllButton setFiltervalue={setFiltervalue} setFilterOption={setFilterOption}/>
                </div>
        </div>
    )
};

export default TaskHeader;