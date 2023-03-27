import React, { useEffect,  useState } from "react";
import "./NavBar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BsHandbag, BsHeart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../../store/filter/reducer";
import WishModal from "../WishModal/WishModal";
import BagModal from "../BagModal/BagModal";
export default function NavBar() {
    var navElements = [
        "Men",
        "Women",
        "Kids",
        "Home & Living",
        "Beauty",
        "Studio",
    ];
    const dispatch = useDispatch();
    const text = useSelector((state) => state.filter.text);
    const navigator = useNavigate();
    const [value, setValue] = useState(text);
    const { pathname } = useLocation();
    const [showModal, setShowModal] = useState(false);
    const wishlist = useSelector((state) => state.bag.wishList);
    const [bagModalOpen, setBagModalOpen] = useState(false);
    useEffect(() => {
    }, [wishlist]);
    return (
        <div className="navbar-container">
            <div className="logo">
              <Link to="/">
                <img
                    src={require("../../assets/myntra-logo-B3C45EAD5C-seeklogo.com.png")}
                    alt="Myntra logo"
                    className="logo-img"
                />
              </Link>
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
                    <GoSearch className="searchbarIcon" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Search for products,brands and more"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch(setTextFilter(value));
                                if (pathname !== "/") navigator("/");
                            }
                        }}
                    />
                </div>
                <div className="options-container">
                    <div className="icon-container">
                        <IoPersonOutline className="options-icon" />
                        <h5 className="icon-text">Profile</h5>
                    </div>
                    <div className="icon-container" onClick={()=>setShowModal(true)}>
                        <BsHeart className="options-icon" />
                        <h5 className="icon-text">Wishlist</h5>
                    </div>
                    <div className="icon-container" onClick={()=>setBagModalOpen(true)}>
                        <BsHandbag className="options-icon" />
                        <h5 className="icon-text">Bag</h5>
                    </div>
                </div>
            </div>
            {showModal && <WishModal setOpenModal={setShowModal} />}
            {bagModalOpen && <BagModal setOpenModal={setBagModalOpen}/>}
        </div>
    );
}
