import React from "react";
import "./ShirtList.css";
import ShirtCard from "../ShirtCard/ShirtCard";
export default function ShirtList() {
    return <div className="shirts-container">
      <ul>
        <ShirtCard/>
        <ShirtCard/>
        <ShirtCard/>
        <ShirtCard/>
        <ShirtCard/>
        <ShirtCard/>
        <ShirtCard/>
      </ul>
    </div>;
}
