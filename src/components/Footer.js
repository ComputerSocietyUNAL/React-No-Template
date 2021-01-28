import React , { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './Footer.css';


export default class Footer extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        alert("Current State is: " + 
            e.target.name.value + " " +
            e.target.email.value + " " +
            e.target.Message.value 
         );
         axios.post('/mailer',{
            name: e.target.name.value,
            email: e.target.email.value,
            Message: e.target.Message.value
         })
    }
    render(){
        return(
            <React.Fragment>
                <div className="blackBoxWeb" style={{
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
                            <Form style={{fontSize:"29px"}} onSubmit={(e)=>this.handleSubmit(e)}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Label for="Name">Nombre</Label>
                                            <Input type="name" name="name" id="name" placeholder="Nombre" 
                                            style={{
                                                backgroundColor:"transparent",
                                                borderTopColor:"transparent",
                                                borderLeftColor:"transparent",
                                                borderRightColor:"transparent"}}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="Email">E-mail</Label>
                                            <Input type="email" name="email" id="email" placeholder=" e-mail"
                                            style={{
                                                backgroundColor:"transparent",
                                                borderTopColor:"transparent",
                                                borderLeftColor:"transparent",
                                                borderRightColor:"transparent"}} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="Message" >Mensaje</Label>
                                    <Input type="textarea" name="Message" id="Message" rows="4"
                                    style={{
                                        backgroundColor:"transparent",
                                        borderTopColor:"transparent",
                                        borderLeftColor:"transparent",
                                        borderRightColor:"transparent"}} />
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
                <div className="blackBoxMov" style={{
                    backgroundImage:"url(/assets/img/FooterPic.png)",
                    backgroundSize:"cover",
                    width:"100%"
                    }}>
                    <p style={{fontSize:"40pt",textAlign:"center"}}>
                                Contacto
                    </p>
                    <div className="row" style={{
                        width:"100%",
                        marginLeft:"0%"}}>
                        <div className="col-12" >
                            <Form style={{fontSize:"29px"}} onSubmit={(e)=>this.handleSubmit(e)}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Label for="Name">Nombre</Label>
                                            <Input type="name" name="name" id="name" placeholder="Nombre" 
                                            style={{
                                                backgroundColor:"transparent",
                                                borderTopColor:"transparent",
                                                borderLeftColor:"transparent",
                                                borderRightColor:"transparent"}}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="Email">E-mail</Label>
                                            <Input type="email" name="email" id="email" placeholder=" e-mail"
                                            style={{
                                                backgroundColor:"transparent",
                                                borderTopColor:"transparent",
                                                borderLeftColor:"transparent",
                                                borderRightColor:"transparent"}} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="Message" >Mensaje</Label>
                                    <Input type="textarea" name="Message" id="Message" rows="4"
                                    style={{
                                        backgroundColor:"transparent",
                                        borderTopColor:"transparent",
                                        borderLeftColor:"transparent",
                                        borderRightColor:"transparent"}} />
                                </FormGroup>
                                <FormGroup style={{textAlign:"end"}}>
                                    <Button type="submit" className="submitbtn" style={{
                                        backgroundColor:"#D84962"}}>
                                            Enviar
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/assets/img/Hotspot.png" alt="" height="60%" style={{marginLeft:"20%",marginTop:"25%"}}/>
                                </div>
                                <div className="col-4">
                                    <p style={{textAlign:"center",marginTop:"50px",marginLeft:"-35%",fontSize:"1.1rem"}}>Bogota D.C</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <img src="/assets/img/Celphone.png" alt="" height="60%" style={{marginLeft:"0%",marginTop:"30px"}}/>
                                </div>
                                <div className="col-4">
                                    <p style={{textAlign:"center",marginTop:"50px",marginLeft:"-20%",fontSize:"1.0rem"}}>000-000-0000</p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}