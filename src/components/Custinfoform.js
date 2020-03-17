import React, { Component} from 'react';

const Custinfoform = ({custCompName, custAddrLine1, custAddrLine2, custCity, 
    custPostalCode, custState, custCountry, captureInfo, submitInfo}) => {
        return(
                <form>
                    <label>Company/Business Name{custCompName}</label><br/>
                    <input type = "text" name = "custCompName" onBlur = {captureInfo}/><br/>
                    <label>Address Line 1{custAddrLine1}</label><br/>
                    <input type = "text" name = "custAddrLine1" onBlur = {captureInfo}/><br/>
                    <label>Address Line 2{custAddrLine2}</label><br/>
                    <input type = "text" name = "custAddrLine2" onBlur = {captureInfo}/><br/>
                    <label>City{custCity}</label><br/>
                    <input type = "text" name = "custCity" onBlur = {captureInfo}/><br/>
                    <label>Postal/Zip Code{custPostalCode}</label><br/>
                    <input type = "text" name = "custPostalCode" onBlur = {captureInfo}/><br/>
                    <label>Province/State{custState}</label><br/>
                    <input type = "text" name = "custState" onBlur = {captureInfo}/><br/>
                    <label>Country{custCountry}</label><br/>
                    <input type = "text" name = "custCountry" onBlur = {captureInfo}/><br/>
                    <button name = "custInfoSubmit" type = "button" onClick = {submitInfo}>Continue</button>               
                </form>
            );
}

export default Custinfoform;