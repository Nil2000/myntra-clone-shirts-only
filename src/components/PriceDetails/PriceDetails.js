import React, { useEffect } from "react";
import "./PriceDetails.css";
import { BsArrow90DegRight, BsHandbagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import SelectSize from "../SelectSize/SelectSize";
import { addInBag } from "../../store/bag/reducer";
export default function PriceDetails(props) {
    const selectedSize = props.selectedSize;
    return (
        <div className="details-page-price-container">
            <div className="name">
                <h2>{props.obj.brandName}</h2>
                <h4>{props.obj.productName}</h4>
            </div>
            <div className="content-price">
                <div className="row1">
                    <span className="price">Rs. {props.obj.price}</span>
                    <span className="original-price">
                        {props.obj.originalPrice}
                    </span>
                    <span className="discount">
                        ({props.obj.discountPercent}% off)
                    </span>
                </div>
                <div className="row2">inclusive of all taxes</div>
                <SelectSize
                    sizes={[38, 40, 42, 44, 46]}
                    selectedSize={(size) => props.setSelectedSize(size)}
                    showSizeError={props.showSizeError}
                />
                <div className="button-group">
                    {props.addedToBag ? (
                        <button className="bag">
                            Go to bag
                            <BsArrow90DegRight />
                        </button>
                    ) : (
                        <button
                            className="bag"
                            onClick={() => {
                                if (!selectedSize) props.setShowSizeError(true);
                                else {
                                    props.setAddedToBag(true);
                                    props.dispatch(
                                        addInBag({
                                            ...props.obj,
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
                            props.insideWishList
                                ? "wishlist wishlist-clicked"
                                : "wishlist"
                        }
                        onClick={props.toggleAddToWishList}
                    >
                        <AiOutlineHeart />
                        <span>Wishlist</span>
                    </button>
                </div>

                <div className="row1">
                    <span className="price">Rs. {props.obj.price}</span>
                    <span className="original-price">
                        {props.obj.originalPrice}
                    </span>
                    <span className="discount">
                        ({props.obj.discountPercent}% off)
                    </span>
                </div>

                <div className="seller-info">
                    <span>Seller :</span>
                    <h4>Omnitech Retail</h4>
                </div>
            </div>
        </div>
    );
}
