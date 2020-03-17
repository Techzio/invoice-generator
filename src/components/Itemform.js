import React, { Component} from 'react';

const Itemform = ({itemName, description,quantity, price, tax, total, captureInfo, submitInfo}) => {
        return(
                <form>
                    <label>Item{itemName}</label><br/>
                    <input type = "text" name = "itemName" onBlur = {captureInfo}/><br/>
                    <label>Description{description}</label><br/>
                    <input type = "text" name = "description" onBlur = {captureInfo}/><br/>
                    <label>Quantity{quantity}</label><br/>
                    <input type = "text" name = "quantity" onBlur = {captureInfo}/><br/>
                    <label>Price{price}</label><br/>
                    <input type = "text" name = "price" onBlur = {captureInfo}/><br/>
                    <label>Tax{tax}</label><br/>
                    <input type = "text" name = "tax" onBlur = {captureInfo}/><br/>
                    <label>Total{total}</label><br/>
                    <input type = "text" name = "total" onBlur = {captureInfo}/><br/>
                    <button name ="itemInfoSubmit" type = "button" onClick = {submitInfo}>Continue</button>               
                </form>
            );
}

export default Itemform;