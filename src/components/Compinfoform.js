import React, { Component} from 'react';

const Compinfoform = ({compCompName, compAddrLine1, compAddrLine2, compCity, 
    compPostalCode, compState, compCountry, captureInfo, submitInfo}) => {
        return(
                <form>
                    <label>Company/Business Name{compCompName}</label><br/>
                    <input type = "text" name = "compCompName" onBlur = {captureInfo}/><br/>
                    <label>Address Line 1{compAddrLine1}</label><br/>
                    <input type = "text" name = "compAddrLine1" onBlur = {captureInfo}/><br/>
                    <label>Address Line 2{compAddrLine2}</label><br/>
                    <input type = "text" name = "compAddrLine2" onBlur = {captureInfo}/><br/>
                    <label>City{compCity}</label><br/>
                    <input type = "text" name = "compCity" onBlur = {captureInfo}/><br/>
                    <label>Postal/Zip Code{compPostalCode}</label><br/>
                    <input type = "text" name = "compPostalCode" onBlur = {captureInfo}/><br/>
                    <label>Province/State{compState}</label><br/>
                    <input type = "text" name = "compState" onBlur = {captureInfo}/><br/>
                    <label>Country{compCountry}</label><br/>
                    <input type = "text" name = "compCountry" onBlur = {captureInfo}/><br/>
                    <button name ="compInfoSubmit" type = "button" onClick = {submitInfo}>Continue</button>               
                </form>
            );
}

export default Compinfoform;