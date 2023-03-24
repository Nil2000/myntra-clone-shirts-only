import React, { useState } from "react";
import "./SortListContainer.css"
export default function SortListContainer(props) {

  const [isListOpen, setIsListOpen] = useState(false);

  function OpenList() {
      setIsListOpen(true);
  }

  function CloseList() {
      setIsListOpen(false);
  }

    return (
        <ul className="sort-list">
            <li>
                <label className="sort-label">
                    <input type="radio" value="recommended" />
                    Recommended
                </label>
            </li>
            <li>
                <label className="sort-label">
                    <input type="radio" value="recommended" />
                    Whats new
                </label>
            </li>
            <li>
                <label className="sort-label">
                    <input type="radio" value="recommended" />
                    Popularity
                </label>
            </li>
            <li>
                <label className="sort-label ">
                    <input type="radio" value="recommended" />
                    Better Discount
                </label>
            </li>
            <li>
                <label className="sort-label ">
                    <input type="radio" value="recommended" />
                    Price: High to Low
                </label>
            </li>
        </ul>
    );
}
