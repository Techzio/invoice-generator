import React, { Component} from 'react';

const Invoiceform = ({invTitle, summary, invNumber, invDate, invDue, captureInfo, submitInfo}) => {
        return(
                <form>
                    <label>Invoice Title{invTitle}</label><br/>
                    <input type = "text" name = "invTitle" onBlur = {captureInfo}/><br/>
                    <label>Summary{summary}</label><br/>
                    <input type = "text" name = "summary" onBlur = {captureInfo}/><br/>
                    <label>Invoice Number{invNumber}</label><br/>
                    <input type = "text" name = "invNumber" onBlur = {captureInfo}/><br/>
                    <label>Invoice Date{invDate}</label><br/>
                    <input type = "text" name = "invDate" onBlur = {captureInfo}/><br/>
                    <label>Invoice Due{invDue}</label><br/>
                    <input type = "text" name = "invDue" onBlur = {captureInfo}/><br/>
                    <button name ="invoiceInfoSubmit" type = "button" onClick = {submitInfo}>Continue</button>               
                </form>
            );
}

export default Invoiceform;