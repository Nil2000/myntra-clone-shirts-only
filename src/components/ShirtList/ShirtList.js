import React, { useEffect, useState } from "react";
import "./ShirtList.css";
import ShirtCard from "../ShirtCard/ShirtCard";
import { useSelector } from "react-redux";
export default function ShirtList({ data, forWishList }) {
  const wishlist = useSelector((state) => state.bag.wishList);
  useEffect(()=>{
    console.log(wishlist);
  },[wishlist]);
    return data.length > 0 ? (
        <div className="shirts-container">
            <ul>
                {data.map((item) => {
                    let wishListed = false;
                    wishlist.forEach((wishListItem) => {
                        wishListed = wishListItem.id === item.id;
                    });
                    return (
                        <ShirtCard
                            {...item}
                            wishListed={wishListed}
                            forWishlist={forWishList}
                            key={item.id}
                        />
                    );
                })}
            </ul>
        </div>
    ) : (
        "No similar products"
    );
}
