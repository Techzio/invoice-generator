import React, { Component } from 'react';

function(Childcomponent){
    return 
    class HOCComponent extends Component
    {
        constructor(props){
            super(props);
            this.state = {
                compName: "",
                addrLine1:"",
                addrLine2:"",
                city:"",
                postalCode:"",
                state:"",
                country:"",
            };
         render()
            {
                return(
                    <div>
                        <form>
                            <label>Company/Business Name{this.state.compName}</label><br/>
                            <input type = "text" name = "compName" onBlur = {this.captureInfo}/><br/>
                            <label>Address Line 1{this.state.addrLine1}</label><br/>
                            <input type = "text" name = "addrLine1" onBlur = {this.captureInfo}/><br/>
                            <label>Address Line 2{this.state.addrLine2}</label><br/>
                            <input type = "text" name = "addrLine2" onBlur = {this.captureInfo}/><br/>
                            <label>City{this.state.city}</label><br/>
                            <input type = "text" name = "city" onBlur = {this.captureInfo}/><br/>
                            <label>Postal/Zip Code{this.state.postalCode}</label><br/>
                            <input type = "text" name = "postalCode" onBlur = {this.captureInfo}/><br/>
                            <label>Province/State{this.state.state}</label><br/>
                            <input type = "text" name = "state" onBlur = {this.captureInfo}/><br/>
                            <label>Country{this.state.country}</label><br/>
                            <input type = "text" name = "country" onBlur = {this.captureInfo}/><br/>
                            <button type = "button" onClick = {this.submitInfo}>Continue</button>               
                        </form>
                    </div>
                    <Infoform owner = "customer" customercompName = {this.state.compName}/>
                    );
        
            }
    }

}