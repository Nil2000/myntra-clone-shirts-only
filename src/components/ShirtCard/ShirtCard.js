import React, { useEffect, useState } from "react";
import "./ShirtCard.css";
import { MdClose, MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addInWishlist, removeInWishList } from "../../store/bag/reducer";
import { Link } from "react-router-dom";
import Carousel from "../CustomCarousal/Carousal";
import { setShowSimilar } from "../../store/common/reducer";
export default function ShirtCard({
    images,
    color,
    brandName,
    productName,
    price,
    originalPrice,
    discountPercent,
    id,
    wishListed,
    forWishlist = false,
}) {
    const [autoPlay, setAutoPlay] = useState(false);
    const dispatch = useDispatch();
    const [insideWishList, setInsideWishList] = useState(wishListed);
    const [showModal, setShowModal] = useState(false);
    const toggleAddToWishList = () => {
        setInsideWishList(!insideWishList);
        if (insideWishList) {
            dispatch(removeInWishList(id));
        } else {
            dispatch(
                addInWishlist({
                    images,
                    brandName,
                    productName,
                    price,
                    originalPrice,
                    discountPercent,
                    id,
                })
            );
        }
    };
    const wishlist = useSelector((state) => state.bag.wishList);
    useEffect(()=>{
      let newState=false;
      wishlist.forEach(element => {
        if(element.id===id){
          newState=true;
        }
      });
      setInsideWishList(newState);
    },[wishlist,id])
    return (
        <div
            className="product-base"
            onMouseEnter={() => setAutoPlay(true)}
            onMouseLeave={() => setAutoPlay(false)}
        >
            <Link to={"/shirts/" + id} className="link">
                {!forWishlist && (
                    <div className="carousal-effect">
                        {!autoPlay && <img src={images[0]} alt="" />}
                        {autoPlay && <Carousel images={images} />}
                    </div>
                )}
                {forWishlist && (
                    <div className="carousal-effect">
                        {<img src={images[0]} alt="" />}
                    </div>
                )}
            </Link>
            {!forWishlist && (
                <div
                    className="similar"
                    onClick={() =>
                        dispatch(setShowSimilar({ query: color.join(" "), id }))
                    }
                >
                    <button>
                        <span>
                            <MdOutlineContentCopy className="icon" />
                        </span>
                    </button>
                </div>
            )}
            {forWishlist && (
                <div
                    className="remove-wishlist"
                    onClick={() => {
                        dispatch(removeInWishList(id));
                        if(insideWishList)
                          setInsideWishList(!insideWishList);
                    }}
                >
                    <button>X</button>
                </div>
            )}
            {!forWishlist && (
                <div className="wishlist">
                    <button
                        onClick={toggleAddToWishList}
                        className={insideWishList ? "buttonActive" : ""}
                    >
                        <span>
                            <AiOutlineHeart className="icon" />
                        </span>
                        Wishlist
                    </button>
                </div>
            )}
            <Link to={"/shirts/" + id} className="link">
                <div className={forWishlist?"product-details openwishlist":"product-details"}>
                    <p className="brand">{brandName}</p>
                    <p className="product">{productName}</p>
                    <div className="price-part">
                        <span className="price">{`Rs. ${price}`}</span>
                        <span className="original-price">{`Rs. ${originalPrice}`}</span>
                        <span className="discount">{`(${discountPercent}% off)`}</span>
                    </div>
                </div>
            </Link>
            {forWishlist && (
                <div className="moveToBag">
                    <button
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        Move To bag
                    </button>
                </div>
            )}
        </div>
    );
}
