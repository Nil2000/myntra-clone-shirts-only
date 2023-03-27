import React, { useState } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
    setColorFilter,
    setDiscountRangeFilter,
    setGenderFilter,
    setPriceFilter,
} from "../../store/filter/reducer";
import RadioGroup from "../RadioGroup/RadioGroup";
import CheckboxGroup from "../CheckBoxGroup/CheckBoxGroup";
import { filterColors } from "../../utils/filterColor";

export default function Filter() {
    var genderList = ["Men", "Women", "Boys", "Girls"];
    var priceList = ["374-1531", "1531-2688", "2688-3845", "3845-5002"];
    var discountList=[10,20,30,40,50,60]

    const filters = useSelector((state) => state.filter);
    const [gender, setGender] = useState(filters.gender);
    const [colors, setColors] = useState(filters.color);
    const [discountRange, setDiscountRange] = useState(filters.discountRange);
    const [price, setPrice] = useState(filters.price);
    const dispatch = useDispatch();
    const onGenderChange = (value) => {
        setGender(value);
        dispatch(setGenderFilter(value));
    };
    const onDiscountRangeChange = (value) => {
        setDiscountRange(value);
        dispatch(setDiscountRangeFilter(value));
    };
    const onColorsChange = (checkedValues) => {
        setColors(checkedValues);
        dispatch(setColorFilter(checkedValues));
    };
    const onPriceChange = (checkedValues) => {
        setPrice(checkedValues);
        dispatch(setPriceFilter(checkedValues));
    };

    const options = genderList.map((item) => {
        return {
            value: item,
            label: item,
        };
    });
    function customPriceRange(str){
      let temp=str.split('-');
      return `Rs. ${temp[0]} to Rs. ${temp[1]}`;
    }
    const priceOptions=priceList.map((item)=>{
      return {
        value:item,
        label:customPriceRange(item)
      }
    })
    const colorOptions=filterColors.map((item)=>{
      return {
        value:item.name,
        label:item.name,
      }
    })
    const discountOptions=discountList.map((item)=>{
      return {
        value:item,
        label:`${item}% and above`
      }
    })
    return (
        <div className="filter">
            <div className="filter-header">
                <h3>Filters</h3>
            </div>
            <div className="filter-contents">
                <div className="filter-item">
                    <RadioGroup options={options} onChange={onGenderChange} />
                </div>
                <div className="filter-item">
                    <span className="filter-heading">Price</span>
                    <CheckboxGroup options={priceOptions} onChange={onPriceChange} selectedValues={price}/>
                </div>
                <div className="filter-item">
                    <span className="filter-heading">Color</span>
                    <CheckboxGroup options={colorOptions} onChange={onColorsChange} selectedValues={colors}/>
                </div>
                <div className="filter-item">
                    <span className="filter-heading">Discount range</span>
                    <RadioGroup options={discountOptions} onChange={onDiscountRangeChange} />
                </div>
            </div>
        </div>
    );
}
