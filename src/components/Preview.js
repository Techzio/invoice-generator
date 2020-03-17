const Preview = ({compCompName, compAddrLine1, compAddrLine2, compCity, 
    compPostalCode, compState, compCountry,
    custCompName, custAddrLine1, custAddrLine2, custCity, 
    custPostalCode, custState, custCountry, captureInfo, submitInfo, invTitle, 
    summary, 
    invNumber, 
    invDate, 
    invDue}) =>{
    return (`Check the Preview
    ${invNumber}
    ${compAddrLine1}
    ${compAddrLine2}
    ${compCity} ${compPostalCode} ${compState}`);
}


export default Preview;
