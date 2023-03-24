import React from 'react'
import "./RightFilter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function RightFilter() {
  return (
    <div className='right-filters'>
      <ul className='right-filters-main'>
        <li className='right-filter-li'>
          <label >
            <input type="radio" />
            <h4>Add-ons</h4>
            <span><RiArrowDropDownLine className='icon'/></span>
          </label>
        </li>
        <li className='right-filter-li'>
          <label>
            <input type="radio" />
            <h4>Add-ons</h4>
            <span><RiArrowDropDownLine className='icon'/></span>
          </label>
        </li>
        <li className='right-filter-li'>
          <label>
            <input type="radio" />
            <h4>Add-ons</h4>
            <span><RiArrowDropDownLine className='icon'/></span>
          </label>
        </li>
        <li className='right-filter-li'>
          <label>
            <input type="radio" />
            <h4>Add-ons</h4>
            <span><RiArrowDropDownLine className='icon'/></span>
          </label>
        </li>
        <li className='right-filter-li'>
          <label>
            <input type="radio" />
            <h4>Add-ons</h4>
            <span><RiArrowDropDownLine className='icon'/></span>
          </label>
        </li>
        <li className='right-filter-li'>
          <label>
            <input type="radio" />
            <h4>
              +17 more
            </h4>
          </label>
        </li>
      </ul>
      <div className="right-filter-sub">

      </div>
    </div>
  )
}
