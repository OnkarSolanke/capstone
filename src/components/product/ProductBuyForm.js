import React, { useState } from 'react';
import CookieService from "services/CookieService";
import AuthService from "services/AuthService";


// react-bootstrap components
import {
  Row,
  Col,
  Form,
  Modal,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import Api from 'services/Api';
import ProductCard from './ProductCard';
const expiresAt = 3;

function ProductBuyForm({product,onHide,showModal}) {

    const [mobileNo , setMobileNo] = useState('');

    const [otpValue,setOtpValue] = useState('');

    const [setDisabled , handleDisabled] = useState(true);
    const [otpDisabled , handleotpDisabled] = useState(true);
    const [verifyDisabled , handleverifyDisabled] = useState(true);
    const [isVerified , setIsVerified] = useState(AuthService.isLogedIn());
    const [otpMessage , handleOtpMessage] = useState('');
    const [timer , setTimer] = useState();

    const [address,setAddress] = useState();
    const [requiredQty,setrequiredQty] = useState();
    const [detailrequiredQty,setdetailrequiredQty] = useState();
    const [customerName , setCustomerName] = useState(function(){
        let user = CookieService.get('user');
        if(user){
            return user.name === 'NA' ? '' : user.name;
        }
        return '';
    });
    function isNumber(o) {
        return o === '' || !isNaN(o - 0);
    }
    function handleMobileKeyDown(e){
        var keyCode = e.keyCode || e.which;
        if (keyCode >= 96 && keyCode <= 105) {
            keyCode -= 48;
        }
        if(keyCode === 8) return true;
        if(!isNumber(String.fromCharCode(keyCode))){
            e.preventDefault();
        }
    }
    function handleKeyUp(e){
        var length = e.target.value.length;
        handleDisabled(true)
        if(length === 10) handleDisabled(false);
    }
    async function handleGenrateOtp(){
        let response = await Api().post('/genrate-otp',{
            mobile : mobileNo + '@civilshopee.customer',
        });
        console.log(response);
        if(response.status === 200){
            handleDisabled(true);
            handleOtpMessage('OTP Genarated');
            handleotpDisabled(false)
    
            var duration = 10;
            var timer = duration, minutes, seconds;
            var otptimer = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                setTimer('Resend In ' + minutes + ":" + seconds);
        
                if (--timer < 0) {
                    handleDisabled(false);
                    setTimer('');
                    clearInterval(otptimer);
                }
            },1000);
        }

    }
    function hanldeOtpKeyUp(e){
        var length = e.target.value.length;
        handleverifyDisabled(true)
        if(length === 4) handleverifyDisabled(false);
    }
    async function handleOtpVerivication(){
        let response = await Api().post('/login',{
            username : mobileNo + '@civilshopee.customer',
            password : otpValue,
        });
        if(response.status === 200){
            console.log(response);
            if(response.data && response.data.access_token){
                
                let date = new Date(Date.now() + expiresAt * 60 * 1000);
                let options = { path: "/" , expires : date};
                CookieService.set("access_token", response.data.access_token, options);
                if(response.user){
                    CookieService.set("user", response.user, options);
                }
                setIsVerified(true);
            }
        }
    }
    async function  handlePlaceOrder(){
        let order = {address,
        requiredQty,
        detailrequiredQty,
        customerName,product}

        let responce = await Api().post('/order',{
            order : order,
        }).catch(function(e){
            console.log(e);
          });
        console.log(responce);
    }
  return (
    <>
     <Modal
        size="xl"
        show={showModal}
        onHide={onHide}
        >
            <Modal.Header closeButton
              className="text-center">
                 <Modal.Title className="w-100 mt-0">Let us Know Your Requirement</Modal.Title>
            </Modal.Header>
            <Modal.Body className="border-top">  
                <Row>
                    <Col md={3}>
                    <ProductCard 
                        product={product} />
                    </Col>

                    <Col md={9}>

                        {
                            !isVerified ? 
                            <Form >
                                <Row>
                                    <Col md={ { span: 6, offset: 1 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">Phone No.</Form.Label>
                                            <Col sm="8">
                                                <FormControl
                                                    maxLength={10}
                                                    type="text"
                                                    value={mobileNo}
                                                    onChange={(e) => setMobileNo(e.target.value)}
                                                    onKeyDown={ (e)=> handleMobileKeyDown(e)}
                                                    onKeyUp={(e) => handleKeyUp(e)}
                                                ></FormControl>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 4 }}>
                                        <Button
                                            className="btn-fill align-bottom"
                                            type="button"
                                            variant="info"
                                            disabled={setDisabled}
                                            onClick={handleGenrateOtp}
                                        >
                                            Genrate OTP
                                        </Button>
                                    </Col>
                                    <Col md={ { span: 1 }}>
                                        <p><small>
                                        {timer}
                                        </small></p>
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col md={ { span: 6, offset: 1 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">OTP</Form.Label>
                                            <Col sm="8">
                                                <FormControl
                                                    maxLength={4}
                                                    type="text"
                                                    disabled={otpDisabled}
                                                    value={otpValue}
                                                    onChange={(e) => setOtpValue(e.target.value)}
                                                    onKeyDown={ (e)=> hanldeOtpKeyUp(e)}
                                                ></FormControl>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 2 }}>
                                        <Button
                                            className="btn-fill align-bottom"
                                            type="button"
                                            variant="success"
                                            onClick=''
                                            disabled={verifyDisabled}
                                            onClick={handleOtpVerivication}
                                        >
                                            Verify
                                        </Button>
                                    </Col>
                                </Row> 
                            </Form>
                            :
                            <Form >
                                <Row>
                                    <Col md={ { span: 8, offset: 2 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">Your Name</Form.Label>
                                            <Col sm="8">
                                                <FormControl
                                                    type="text"
                                                    value={customerName}
                                                    onChange={ (e) => setCustomerName(e.target.value)}
                                                ></FormControl>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 8, offset: 2 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">Your Address</Form.Label>
                                            <Col sm="8">
                                                <FormControl
                                                    type="text"
                                                    value={address}
                                                    onChange={ (e) => setAddress(e.target.value)}
                                                ></FormControl>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 8, offset: 2 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">How Much You Required ?</Form.Label>
                                           
                                            <Col sm="8">
                                                 <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                
                                                </InputGroup.Prepend>
                                                    <Form.Control 
                                                    value={requiredQty} 
                                                    onChange={ e =>  setrequiredQty(e.target.value)} 
                                                    onKeyDown={ (e)=> handleMobileKeyDown(e)}
                                                    onKeyUp={(e) => handleKeyUp(e)}
                                                    aria-label="Amount (to the nearest dollar)" />
                                                <InputGroup.Append>
                                                    <InputGroup.Text>{product.unit}</InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 8, offset: 2 }}>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4" class="font-weight-bold">Requirement Details</Form.Label>
                                            <Col sm="8">
                                                <FormControl
                                                    as="textarea"
                                                    type="text"
                                                    value={detailrequiredQty}
                                                    onChange={ e => setdetailrequiredQty(e.target.value)}
                                                ></FormControl>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md={ { span: 4, offset: 5 }}>
                                    <Button
                                        className="btn-fill align-bottom"
                                        type="button"
                                        variant="info"
                                        onClick={handlePlaceOrder}
                                    >
                                        Place Order 
                                        </Button>
                                    </Col>
                                </Row> 
                            </Form>
                        }
                    </Col>       
                </Row>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default ProductBuyForm;
