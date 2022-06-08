import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function TextEditor(){

    interface Buttons {
        btnNumber: string;
    }

    const Buttons = (props:Buttons) => {
        return(
            <Button>
                {props.btnNumber}
            </Button>
        )
    }

    return(
        <>
            <Container>
                <Row>
                    <Col><Buttons btnNumber="1"/></Col>
                    <Col><Buttons btnNumber="2"/></Col>
                    <Col><Buttons btnNumber="3"/></Col>
                    <Col><Buttons btnNumber="&#247;"/></Col>
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