import React , { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './Footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <div className="row" style={{
                    backgroundColor:"#121212",
                    color:"white",width:"100%",
                    marginLeft:"0%"}}>
                    <div className="col-md-6">
                        <p>
                            Contacto
                        </p>
                    </div>
                    <div className="col-md-6" >
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
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
                                <Button type="submit" className="submitbtn">
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