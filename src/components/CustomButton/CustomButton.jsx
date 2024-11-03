import React from 'react';
import './CustomButton.css'
const CustomButton = ({title, onPress}) => {
    return (
        <button className={"custom-button"} onClick={onPress}>{title}</button>
    );
};

export default CustomButton;