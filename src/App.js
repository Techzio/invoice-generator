import React, { Component } from 'react';
import Compinfoform from './components/Compinfoform';
import Custinfoform from './components/Custinfoform';
import Preview from './components/Preview';
import InvoiceForm from './components/Invoiceform';


import './App.css';
import { render } from '@testing-library/react';
import Itemform from './components/Itemform';

class App extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
            compCompName: "",
            compAddrLine1:"",
            compAddrLine2:"",
            compCity:"",
            compPostalCode:"",
            compState:"",
            compCountry:"",
            isCompInfoSubmit: false,
            owner:"company",
            custCompName: "",
            custAddrLine1:"",
            custAddrLine2:"",
            custCity:"",
            custPostalCode:"",
            custState:"",
            custCountry:"",
            isCustInfoSubmit: false,
            invTitle:"", 
            summary:"", 
            invNumber:"", 
            invDate:"", 
            invDue:"",
            isInvoiceInfoSubmit:false,
            itemName:"", 
            description:"",
            quantity:"", 
            price:"", 
            tax:"", 
            total:""
          };
    }

  captureInfo = (e) => {
    console.log(e.target.name);
    let inputname = e.target.name;
    let value = e.target.value
    this.setState({[inputname]: value});
  }

  submitInfo = (e) =>{
    e.preventDefault();  
    if(e.target.name == "compInfoSubmit")
    this.setState({isCompInfoSubmit:true});    
    else if(e.target.name == "custInfoSubmit")
    this.setState({isCustInfoSubmit:true});  
    else if(e.target.name == "invoiceInfoSubmit")
    this.setState({isInvoiceInfoSubmit:true});  
    else if(e.target.name == "itemInfoSubmit")
    this.setState({isItemInfoSubmit:true});  
  }
  
  render(){
    return (
      <div className="App">
        {
        (this.state.isCompInfoSubmit && this.state.isCustInfoSubmit && this.state.isInvoiceInfoSubmit
          && this.state.isItemInfoSubmit) ?
          <Preview compCompName = {this.state.compCompName}
          compAddrLine1 = {this.state.compAddrLine1}
          compAddrLine2 = {this.state.compAddrLine2}
          compCity = {this.state.compCity}
          compPostalCode = {this.state.compPostalCode}
          compState = {this.state.compState}
          compCountry = {this.state.compCountry}
          custCompName = {this.state.custCompName}
          custAddrLine1 = {this.state.custAddrLine1}
          custAddrLine2 = {this.state.custAddrLine2}
          custCity = {this.state.custCity}
          custPostalCode = {this.state.custPostalCode}
          custState = {this.state.custState}
          custCountry = {this.state.custCountry}
          invTitle = {this.state.invTitle}
          summary = {this.state.summary}
          invNumber = {this.state.invNumber}
          invDate = {this.state.invDate}
          invDue = {this.state.invDue}
          captureInfo = {this.captureInfo} 
          submitInfo = {this.submitInfo}                  
          />
          :
        (this.state.isCompInfoSubmit && this.state.isCustInfoSubmit && this.state.isInvoiceInfoSubmit) ?
        <Itemform invTitle = {this.state.invTitle}
                  summary = {this.state.summary}
                  invNumber = {this.state.invNumber}       
                  invDate = {this.state.invDate}
                  invDue = {this.state.invDue}            
                  captureInfo = {this.captureInfo}                     
                  submitInfo = {this.submitInfo}/>
          :
        (this.state.isCompInfoSubmit && this.state.isCustInfoSubmit) ?
          <InvoiceForm invTitle = {this.state.invTitle}
                        summary = {this.state.summary}
                        invNumber = {this.state.invNumber}
                        invDate = {this.state.invDate}
                        invDue = {this.state.invDue}
                        captureInfo = {this.captureInfo} 
                        submitInfo = {this.submitInfo} />         
          :
        (this.state.isCompInfoSubmit) ?
        <Custinfoform custCompName = {this.state.custCompName}
        custAddrLine1 = {this.state.custAddrLine1}
        custAddrLine2 = {this.state.custAddrLine2}
        custCity = {this.state.custCity}
        custPostalCode = {this.state.custPostalCode}
        custState = {this.state.custState}
        custCountry = {this.state.custCountry}
        captureInfo = {this.captureInfo} 
        submitInfo = {this.submitInfo}/>
        :

        <Compinfoform compCompName = {this.state.compCompName}
        compAddrLine1 = {this.state.compAddrLine1}
        compAddrLine2 = {this.state.compAddrLine2}
        compCity = {this.state.compCity}
        compPostalCode = {this.state.compPostalCode}
        compState = {this.state.compState}
        compCountry = {this.state.compCountry}
        captureInfo = {this.captureInfo} 
        submitInfo = {this.submitInfo}/>
        }
      </div>
    );
  }
  
}

export default App;
