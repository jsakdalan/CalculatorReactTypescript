import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function TextEditor(){

    const Buttons = (props) => {
        
    }

    return(
        <>
            <Container>
                <Row>
                    <Col><Button>1</Button></Col>
                    <Col><Button>1</Button></Col>
                    <Col><Button>1</Button></Col>
                    <Col><Button>1</Button></Col>
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