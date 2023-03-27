import React from "react";
import "./WishModal.css";
import { useSelector } from "react-redux";
import ShirtList from "../ShirtList/ShirtList";

function Modal({ setOpenModal}) {
  const wishList = useSelector((state) => state.bag.wishList);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>My Wishlist</h1>
        </div>
        <div className="body">
          {wishList.length>0?(
            <div>
              <ShirtList data={wishList} forWishList={true}/>
            </div>
          ):<p>your wishlist is empty</p>}
        </div>
      </div>
    </div>
  );
}

export default Modal;