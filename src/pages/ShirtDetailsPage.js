import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "./ShirtDetailsPage.css";
import "react-image-lightbox/style.css";
import { BsArrow90DegRight, BsArrowRight, BsHandbagFill } from "react-icons/bs";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import "../components/PriceDetails/PriceDetails.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import {
    addInBag,
    addInWishlist,
    removeInWishList,
} from "../store/bag/reducer";
import SelectSize from "../components/SelectSize/SelectSize";
import Lightbox from "react-image-lightbox";
import BagModal from "../components/BagModal/BagModal";

export default function ShirtDetailsPage() {
    const { id } = useParams();
    const product = useSelector((state) => state.bag.allProducts).find(
        (item) => item.id === id
    );
    const [bagModalOpen, setBagModalOpen] = useState(false);
    const inWishList =
        useSelector((state) => state.bag.wishList).findIndex(
            (item) => item.id === id
        ) >= 0;

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showSizeError, setShowSizeError] = useState(false);
    const [addedToBag, setAddedToBag] = useState(false);
    const [insideWishList, setInsideWishList] = useState(inWishList);
    const dispatch = useDispatch();
    useEffect(() => {
        setShowSizeError(false);
    }, [selectedSize]);
    const toggleAddToWishList = () => {
        setInsideWishList(!insideWishList);
        if (insideWishList) {
            dispatch(removeInWishList(id));
        } else {
            dispatch(addInWishlist(product));
        }
    };
    return (
        <div className="shirt-details-page">
            {!bagModalOpen && <div className="detail">
                {<header>
                    <NavBar />
                </header>}
                <div className="shirt-details-page-body">
                    <div className="body-header">
                        <span>
                            {" "}
                            Home / Clothing / Shirts For Men & Women /{" "}
                        </span>
                        <h4>{product.productName}</h4>
                    </div>
                    <div className="main-body">
                        <div className="left-body">
                            <div className="image-list">
                                {product.images.map((item, index) => {
                                    return (
                                        <div
                                            className="image"
                                            key={index}
                                            onClick={() => {
                                                setIsOpen(true);
                                                setPhotoIndex(index);
                                            }}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="right-body">
                            <div className="details-page-price-container">
                                <div className="name">
                                    <h2>{product.brandName}</h2>
                                    <h4>{product.productName}</h4>
                                </div>
                                <div className="content-price">
                                    <div className="row1">
                                        <span className="price">
                                            Rs. {product.price}
                                        </span>
                                        <span className="original-price">
                                            {product.originalPrice}
                                        </span>
                                        <span className="discount">
                                            ({product.discountPercent}% off)
                                        </span>
                                    </div>
                                    <div className="row2">
                                        inclusive of all taxes
                                    </div>
                                    <SelectSize
                                        sizes={[38, 40, 42, 44, 46]}
                                        selectedSize={(size) =>
                                            setSelectedSize(size)
                                        }
                                        showSizeError={showSizeError}
                                    />
                                    <div className="button-group">
                                        {addedToBag ? (
                                            <button className="bag" onClick={()=>setBagModalOpen(true)}>
                                                Go to bag
                                                <BsArrowRight />
                                            </button>
                                        ) : (
                                            <button
                                                className="bag"
                                                onClick={() => {
                                                    if (!selectedSize)
                                                        setShowSizeError(true);
                                                    else {
                                                        setAddedToBag(true);
                                                        dispatch(
                                                            addInBag({
                                                                ...product,
                                                                quantity: 1,
                                                                selectedSize,
                                                            })
                                                        );
                                                    }
                                                }}
                                            >
                                                <BsHandbagFill />
                                                <span>Add to bag</span>
                                            </button>
                                        )}
                                        <button
                                            className={
                                                insideWishList
                                                    ? "wishlist wishlist-clicked"
                                                    : "wishlist"
                                            }
                                            onClick={toggleAddToWishList}
                                        >
                                            <AiOutlineHeart />
                                            <span>Wishlist</span>
                                        </button>
                                    </div>

                                    <div className="row1">
                                        <span className="price">
                                            Rs. {product.price}
                                        </span>
                                        <span className="original-price">
                                            {product.originalPrice}
                                        </span>
                                        <span className="discount">
                                            ({product.discountPercent}% off)
                                        </span>
                                    </div>

                                    <div className="seller-info">
                                        <span>Seller :</span>
                                        <h4>Omnitech Retail</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {isOpen && (
                <Lightbox
                    mainSrc={product.images[photoIndex]}
                    nextSrc={
                        product.images[(photoIndex + 1) % product.images.length]
                    }
                    prevSrc={
                        product.images[
                            (photoIndex + product.images.length - 1) %
                                product.images.length
                        ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + product.images.length - 1) %
                                product.images.length
                        )
                    }
                    onImageLoadError={()=>console.log("error")}
                    onAfterOpen={()=>console.log("Error")}
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + product.images.length + 1) %
                                product.images.length
                        )
                    }
                />
            )}
            {bagModalOpen && <BagModal setOpenModal={setBagModalOpen}/>}
        </div>
    );
}
