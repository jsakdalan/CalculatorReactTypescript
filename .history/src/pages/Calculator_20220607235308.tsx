import React, { useState, FormEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Calculator.css'

export default function Calculator(){

    const[outputField, setOutputField] = useState<string[]>([]);
    const[prevValue, setPrevValue] = useState();
    var tempValue = new Array;

    interface Screen{
        styling: string;
        output: any;
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
                />{props.output}
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

    const btnValue = (event: FormEvent<HTMLInputElement>) =>{
        console.log(event.currentTarget.value);
        tempValue.push(event.currentTarget.value)
        tryf();
    }

    const tryf = () =>{
        console.log(tempValue)
    }

    return(
        <>
            <Container className="container">
                <Row>
                    <Col><Screen styling="screen" output={outputField}/></Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="1" clickEvent={btnValue} inputValue={1}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="2" clickEvent={btnValue} inputValue={2}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="3" clickEvent={btnValue} inputValue={3}/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="&#247;"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="4" clickEvent={btnValue} inputValue={4}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="5" clickEvent={btnValue} inputValue={5}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="6" clickEvent={btnValue} inputValue={6}/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="X"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="7" clickEvent={btnValue} inputValue={7}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="8" clickEvent={btnValue} inputValue={8}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="9" clickEvent={btnValue} inputValue={9}/></Col>
                                    <Col md={3}><Buttons styling="operational" btnNumber="-"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={9}><Buttons styling="numerical" btnNumber="0" clickEvent={btnValue} inputValue={0}/></Col>
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