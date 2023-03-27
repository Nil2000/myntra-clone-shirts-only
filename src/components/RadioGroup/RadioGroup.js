import React, { useState } from "react";
import "./RadioGroup.css";
export default function RadioGroup(props) {
    const { options, onChange } = props;
    const [selectedValue, setSelectedValue] = useState("");

    const handleOptionChange = (value) => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <div className="radio-group">
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleOptionChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}
