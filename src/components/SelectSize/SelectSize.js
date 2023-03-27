import React, { useEffect, useState } from "react";
import "./SelectSize.css"
export default function SelectSize({ sizes, selectedSize, showSizeError }) {
    const [currentSize, setCurrentSize] = useState(null);
    useEffect(() => {
        selectedSize(currentSize);
    }, [currentSize]);
    return (
        <div className="select-size">
            <p>Select Size</p>
            {showSizeError && <span>Please select a size</span>}
            <div className="sizes">
                {sizes.map((item,index) => {
                    return <div key={index}className={item===currentSize?"circle outline":"circle"} onClick={()=>setCurrentSize(item)}>{item}</div>;
                })}
            </div>
        </div>
    );
}
