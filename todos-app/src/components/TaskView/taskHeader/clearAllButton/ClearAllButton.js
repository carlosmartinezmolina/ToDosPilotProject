import React from "react";

const ClearAllButton = ({setFiltervalue,setFilterOption}) => {
    const handlebuttonClick = () => {
        setFiltervalue('');
        setFilterOption(null);
    };
    return (
        <div className="mx-2">
            <button className="btn btn-warning" onClick={handlebuttonClick}>Clear All Filters</button>
        </div>
    );
};

export default ClearAllButton;