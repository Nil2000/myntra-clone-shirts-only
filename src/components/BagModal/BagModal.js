import React from "react";
import "./BagModal.css";
import { useDispatch, useSelector } from "react-redux";
import List from "../List/List";
import { message } from "antd";
import { clearBag } from "../../store/bag/reducer";
export default function BagModal({ setOpenModal }) {
    const bag = useSelector((state) => state.bag.bag);
    let totalAmount = 0;
    const dispatch = useDispatch();
    bag.forEach((item) => {
        const quantity = typeof item.quantity === "number" ? item.quantity : 1;
        totalAmount += item.price * quantity;
    });

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
                    <h1>Bag</h1>
                </div>
                {bag.length > 0 ? (
                    <div>
                        <div className="body">
                            <List products={bag}/>
                            <div className="summary">
                                <h3>
                                    Total amount:<span>{totalAmount}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="footer">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                id="cancelBtn"
                            >
                                Continue
                            </button>
                            <button onClick={()=>{
                              message.success("Successfully Purchased")
                              dispatch(clearBag())
                            }}>Buy</button>
                        </div>
                    </div>
                ) : (
                    "No item to display"
                )}
            </div>
        </div>
    );
}
