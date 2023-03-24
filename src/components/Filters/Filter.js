import React from "react";
import "./Filter.css";

export default function Filter() {
    var genderList = ["Men", "Women", "Boys", "Girls"];
    var priceList=["Men", "Women", "Boys", "Girls"];
    return (
        <div className="filter">
            <div className="filter-header">
                <h3>Filters</h3>
            </div>
            <div className="filter-contents">
                <div className="filter-item">
                    <ul className="gender-list">
                        {genderList.map((elem, key) => {
                            return (
                                <li key={key}>
                                    <input type="radio" />
                                    <span>{elem}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="filter-item">
                  <span className="filter-heading">Price</span>
                    <ul className="gender-list">
                        {priceList.map((elem, key) => {
                            return (
                                <li key={key}>
                                    <input type="checkbox" />
                                    <span>{elem}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="filter-item">
                  <span className="filter-heading">Discount range</span>
                    <ul className="gender-list">
                        {priceList.map((elem, key) => {
                            return (
                                <li key={key}>
                                    <input type="radio" />
                                    <span>{elem}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
