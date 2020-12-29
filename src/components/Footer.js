import React , { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './Footer.css';


export default class Footer extends Component{
    render(){
        return(
            <div className="blackBox" style={{
                backgroundImage:"url(/assets/img/FooterPic.png)",
                backgroundSize:"cover",
                width:"100%"
                }}>
                <p style={{fontSize:"40pt"}}>
                            Contacto
                </p>
                <div className="row" style={{
                    width:"100%",
                    marginLeft:"0%"}}>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/assets/img/Hotspot.png" alt="" height="60%" style={{marginLeft:"135px",marginTop:"30px"}}/>
                            </div>
                            <div className="col-md-3">
                                <p style={{textAlign:"center",marginTop:"50px",marginLeft:"30px",fontSize:"1.1rem"}}>Bogota D.C</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/assets/img/Celphone.png" alt="" height="60%" style={{marginLeft:"125px",marginTop:"30px"}}/>
                            </div>
                            <div className="col-md-3">
                                <p style={{textAlign:"center",marginTop:"50px",marginLeft:"30px",fontSize:"1.0rem"}}>000-000-0000</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-6" >
                        <Form style={{fontSize:"29px"}}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup >
                                        <Label for="exampleName">Nombre</Label>
                                        <Input type="name" name="name" id="name" placeholder="Nombre" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">E-mail</Label>
                                        <Input type="email" name="email" id="email" placeholder=" e-mail" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleText" >Mensaje</Label>
                                <Input type="textarea" name="Mensaje" id="Mensaje" rows="4" />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" className="submitbtn" style={{
                                    backgroundColor:"#D84962"}}>
                                        Enviar
                                </Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}