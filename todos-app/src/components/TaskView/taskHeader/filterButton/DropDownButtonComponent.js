import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './DropDownButtonComponent.css';
import '../../TaskView.scss';


const DropdownButtonComponent = ({setFilterOption}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setFilterOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <FontAwesomeIcon className="cursorToPointer ms-2 SearchIcon text-secondary" icon={faFilter} onClick={() => setIsOpen(!isOpen)} />

            {isOpen && (
                <div className="dropdown-options">
                    <div className="option h-1" onClick={() => handleOptionClick('Clear')}>
                        Clear
                    </div>
                    <hr className="my-1" />
                    <div className="option h-1" onClick={() => handleOptionClick('ToDo')}>
                        To Do
                    </div>
                    <hr className="my-1" />
                    <div className="option h-1" onClick={() => handleOptionClick('Completed')}>
                        Completed
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButtonComponent;