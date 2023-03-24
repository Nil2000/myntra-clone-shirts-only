import React from "react";
import "./NavBar.css";
import { BsHandbag,BsHeart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
export default function NavBar() {
    var navElements = [
        "Men",
        "Women",
        "Kids",
        "Home & Living",
        "Beauty",
        "Studio",
    ];
    return (
        <div className="navbar-container">
            <div className="logo">
                <img
                    src={require("../assets/myntra-logo-B3C45EAD5C-seeklogo.com.png")}
                    alt="Myntra logo"
                    className="logo-img"
                />
            </div>
            <div className="nav-group">
                {navElements.map((elem, key) => {
                    return (
                        <li key={key}>
                            <div className="nav-elements">{elem}</div>
                        </li>
                    );
                })}
            </div>
            <div className="nav-right">
                <div className="searchbar-container">
                    <GoSearch/>
                    <h5>searhch</h5>
                </div>
                <div className="options-container">
                    <div className="icon-container">
                        <IoPersonOutline className="options-icon"/>
                        <h5 className="icon-text">Profile</h5>
                    </div>
                    <div className="icon-container">
                        <BsHeart className="options-icon"/>
                        <h5 className="icon-text">Wishlist</h5>
                    </div>
                    <div className="icon-container">
                        <BsHandbag className="options-icon"/> 
                        <h5 className="icon-text">Bag</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
