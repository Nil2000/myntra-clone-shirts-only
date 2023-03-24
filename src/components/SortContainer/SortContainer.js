import React, { useState } from "react";
import "./SortContainer.css";
import { SlArrowDown } from "react-icons/sl";
import SortListContainer from "./SortListContainer";

export default function SortContainer() {
    const [isListOpen, setIsListOpen] = useState(false);

    function OpenList() {
        setIsListOpen(true);
    }

    function CloseList() {
        setIsListOpen(false);
    }

    return (
        <div className="sort-container">
            <div onMouseEnter={OpenList} onMouseLeave={CloseList}>
                Sort by : <span>Recommended</span>
                <span>
                    <SlArrowDown className="down-arrow" />
                </span>
                {isListOpen && <SortListContainer />}
            </div>
        </div>
    );
}
