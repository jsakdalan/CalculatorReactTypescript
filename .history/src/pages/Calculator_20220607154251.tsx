import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                </Row>
            </Container>
        </>
    )
}