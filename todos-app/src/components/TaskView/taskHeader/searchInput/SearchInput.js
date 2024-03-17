import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../TaskView.scss';
import './SearchInput.scss';

const SearchInput = ({setFiltervalue}) => {
    const [filterText, setFilterText] = useState('');
    const handleIconClick = (e) => {
        setFiltervalue(filterText);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setFiltervalue(filterText);
        }
    };
    return (
        <div className="mx-2 d-flex">
            <FontAwesomeIcon className="cursorToPointer me-2 SearchIcon" icon={faSearch} onClick={handleIconClick} />
            <input
                type="text"
                placeholder="Search"
                onKeyDown={handleKeyPress}
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;