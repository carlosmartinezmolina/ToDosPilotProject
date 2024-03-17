import React from "react";

import DropdownButtonComponent from './DropDownButtonComponent';

const FilterButton = ({setFilterOption}) => {
    
    return (
        <div>
            <DropdownButtonComponent setFilterOption={setFilterOption} />
        </div>
    );
};

export default FilterButton;