import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './Calculator.css'

export default function TextEditor(){

    interface Screen{
        styling: string;
    }

    interface Buttons {
        styling: string;
        btnNumber: string;
    }

    const Screen = (props:Screen) => {
        return(
            <InputGroup size="lg">
            </InputGroup>
        )
    }

    const Buttons = (props:Buttons) => {
        return(
            <Button className={props.styling}>
                {props.btnNumber}
            </Button>
        )
    }

    return(
        <>
            <Container className="container">
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><Buttons styling="numerical" btnNumber="1"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="2"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="3"/></Col>
                    <Col><Buttons styling="operational" btnNumber="&#247;"/></Col>
                </Row>
                <Row>
                    <Col><Buttons styling="numerical" btnNumber="4"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="5"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="6"/></Col>
                    <Col><Buttons styling="operational" btnNumber="X"/></Col>
                </Row>
                <Row>
                    <Col><Buttons styling="numerical" btnNumber="7"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="8"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="9"/></Col>
                    <Col><Buttons styling="operational" btnNumber="-"/></Col>
                </Row>
                <Row>
                    <Col md={9}><Buttons styling="numerical" btnNumber="0"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="+"/></Col>
                </Row>
            </Container>
        </>
    )
}