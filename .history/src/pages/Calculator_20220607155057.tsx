import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Calculator.css'

export default function TextEditor(){

    interface Buttons {
        styling: string;
        btnNumber: string;
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
            <Container>
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
                    <Col md={8}><Buttons styling="numerical" btnNumber="0"/></Col>
                    <Col><Buttons styling="numerical" btnNumber="+"/></Col>
                </Row>
            </Container>
        </>
    )
}