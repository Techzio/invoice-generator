import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

const Preview = ({compCompName, compAddrLine1, compAddrLine2, compCity, 
    compPostalCode, compState, compCountry,
    custCompName, custAddrLine1, custAddrLine2, custCity, 
    custPostalCode, custState, custCountry, captureInfo, submitInfo, invTitle, 
    summary, 
    invNumber, 
    invDate, 
    invDue, itemName, description,quantity, price, tax, total}) =>{
    return (<Container>
        <Row>
            <Col></Col>
            <Col><span>INVOICE</span><br/></Col>
        </Row>
        <Row>
          <Col>Company Logo</Col>
          <Col>
               <span>{compCompName}</span><br/>
               <span>{compAddrLine1}</span><br/>
               <span>{compAddrLine2}</span><br/>
               <span>{compState}, {compCity}, {compPostalCode}</span><br/>
               <span>3102183213</span><br/>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col><span>BILL TO</span><br/>
          <span>custCompName</span><br/>
          <span>custAddrLine1</span><br/>
          <span>custAddrLine2</span><br/>
          <span>{custState}, {custCity}, {custPostalCode}</span><br/>
          <span>punithadevi.c@gmail.com</span><br/>
          <span>3102183213</span><br/>
          </Col>
          <Col><span>Invoice Number: {invNumber}</span><br/>
          <span>Invoice Date: {invDate}</span><br/>
          <span>Invoice Due: {invDue}</span><br/>
          <span>Amount Due (USD): ${total}</span><br/></Col>         
        </Row>
        <hr/>
        <Row>
          <Col xs="6"><span>Products</span></Col>
          <Col><span>Quantity</span></Col>
          <Col><span>Price</span></Col>
          <Col><span>Amount</span></Col>
        </Row>
        <Row>
          <Col xs="6"><span>{itemName}</span><br/>
          <span>{description}</span></Col>
          <Col><span>{quantity}</span></Col>
          <Col><span>${price}</span></Col>
          <Col><span>${quantity*price}</span></Col>
        </Row>
        <hr/>
        <Row>
          <Col></Col>
          <Col><span>SubTotal: {total}</span><br/>
               <span>Tax 8%: {tax}</span><br/>
          <hr/>
          <span>Total: {total+tax}</span><br/>
          <hr/>
          <span>Amount Due (USD): {total}</span><br/>
          </Col>
        </Row>
      </Container>);
}


export default Preview;
