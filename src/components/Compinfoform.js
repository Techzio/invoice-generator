import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

const Compinfoform = ({compCompName, compAddrLine1, compAddrLine2, compCity, 
    compPostalCode, compState, compCountry, captureInfo, submitInfo}) => {
        return(
                <Form>
                    <FormGroup>
                    <Label>Company/Business Name{compCompName}</Label><br/>
                    <Input type = "text" name = "compCompName" placeholder="Your Company Name" onBlur = {captureInfo}/><br/>
                    </FormGroup>
                    <Row form>
                        <Col>
                    <FormGroup>
                    <Label>Address Line 1{compAddrLine1}</Label><br/>
                    <Input type = "text" name = "compAddrLine1" onBlur = {captureInfo}/><br/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <Label>Address Line 2{compAddrLine2}</Label><br/>
                    <Input type = "text" name = "compAddrLine2" onBlur = {captureInfo}/><br/>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs="6">
                    <Label>City{compCity}</Label><br/>
                    <Input type = "text" name = "compCity" onBlur = {captureInfo}/><br/>
                    </Col>
                    <Col>
                    <Label>Postal/Zip Code{compPostalCode}</Label><br/>
                    <Input type = "text" name = "compPostalCode" onBlur = {captureInfo}/><br/>
                    </Col>
                    <Col>
                    <Label>Province/State{compState}</Label><br/>
                    <Input type = "text" name = "compState" onBlur = {captureInfo}/><br/>
                    </Col>
                    </Row>
                    <FormGroup>
                    <label>Country{compCountry}</label><br/>
                    <input type = "text" name = "compCountry" onBlur = {captureInfo}/><br/>
                    </FormGroup>
                    <button name ="compInfoSubmit" type = "button" onClick = {submitInfo}>Continue</button>               
                </Form>
            );
}

export default Compinfoform;