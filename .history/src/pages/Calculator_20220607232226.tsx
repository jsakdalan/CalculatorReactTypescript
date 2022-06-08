import React, { FormEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Calculator.css'

export default function Calculator(){

    

    interface Screen{
        styling: string;
    }

    interface Buttons {
        styling: string;
        btnNumber: string;
        inputValue?: number;
        clickEvent?: any;
    }

    const Screen = (props:Screen) => {
        return(
            <InputGroup size="lg" className={props.styling}>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    disabled
                />1
            </InputGroup>
        )
    }

    const Buttons = (props:Buttons) => {
        return(
            <Button className={props.styling} onClick={props.clickEvent} value={props.inputValue}>
                {props.btnNumber}
            </Button>
        )
    }

    const trying = (event: FormEvent<HTMLInputElement>) =>{
        console.log('pass');
        console.log(event.currentTarget.value);
    }

    return(
        <>
            <Container className="container">
                <Row>
                    <Col><Screen styling="screen"/></Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="1" clickEvent={trying} inputValue={1}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="2" clickEvent={trying} inputValue={2}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="3"/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="&#247;"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="4"/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="5"/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="6"/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="X"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="7"/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="8"/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="9"/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="-"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={9}><Buttons styling="numerical" btnNumber="0"/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="+"/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md={12}><Buttons styling="erase" btnNumber="C"/></Col>
                                    <Col md={12}><Buttons styling="equals" btnNumber="="/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}