import React, { useState } from "react";
import "./SortContainer.css";
import { SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { setSortType } from "../../store/sort/reducer";

export default function SortContainer() {
    const [current, setCurrent] = useState({
        key: "recommended",
        value: "Recommended",
    });
    const dispatch = useDispatch();
    const onCurrentSortChange = (e) => {
        console.log(e.target.value);
        setCurrent({
            key: e.target.value,
            value: e.target.textContent,
        });
        dispatch(setSortType(e.target.value));
    };
    return (
        <div className="sort-container">
            <div>
                Sort by : <span>{current.value}</span>
                <span>
                    <SlArrowDown className="down-arrow" />
                </span>
                <ul className="sort-list">
                    <li>
                        <button
                            className="sort-label"
                            value="NEW"
                            onClick={onCurrentSortChange}
                        >
                            Whats new
                        </button>
                    </li>
                    <li>
                        <button
                            className="sort-label"
                            value="POPULAR"
                            onClick={onCurrentSortChange}
                        >
                            Popularity
                        </button>
                    </li>
                    <li>
                        <button
                            className="sort-label "
                            value="BETTER_DISCOUNT"
                            onClick={onCurrentSortChange}
                        >
                            Better Discount
                        </button>
                    </li>
                    <li>
                        <button
                            className="sort-label "
                            value="PRICE_HIGH_TO_LOW"
                            onClick={onCurrentSortChange}
                        >
                            Price: High to Low
                        </button>
                    </li>
                    <li>
                        <button
                            className="sort-label "
                            value="PRICE_LOW_TO_HIGH"
                            onClick={onCurrentSortChange}
                        >
                            Price: Low to High
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
