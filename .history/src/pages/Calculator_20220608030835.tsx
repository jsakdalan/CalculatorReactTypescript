import React, { useState, FormEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Calculator.css'

interface Screen{
    styling: string;
    output: any;
}

interface Buttons {
    styling: string;
    btnNumber: string;
    clickEvent?: any;
}

export default function Calculator(){

    const[outputField, setOutputField] = useState<string>('');
    const[operations, setOperations] = useState({});

    const evaluateValue = () => {

        let value = '';
        let isFinished = false;
        let currentOperation = ['*', '/', '+', '-'];

        const sampleValue = '50+5*3+11-3*7';
        const operationsArr = ['+', '*', '-', '/'];
        const result:any[] = [];
        
        sampleValue.split('').forEach(element => {
            console.log(element);
            if(isNaN(parseInt(element))){
                if(value){
                    result.push(value);
                    value = '';
                }
                result.push(element);
            }else{
                value += element;
                console.log(value);
            }
        });

        if(value){
            result.push(value);
        }

        console.log('final', result);

        let a = result.findIndex(element => element === currentOperation[0]);
        console.log(a)
        while(result.length > 1){
            
            const operationIndex = result.findIndex(element => element === currentOperation[0]);

            switch(currentOperation[0]){

                case '*': 
                    const prod = +result[operationIndex-1] * result[operationIndex+1];
                    console.log(prod);
                    result[operationIndex+1] = prod;
                    result.splice(operationIndex-1, 2);
                    break;

                case '/':
                    const quotient = +result[operationIndex-1] / result[operationIndex+1];
                    console.log(quotient);
                    result[operationIndex+1] = quotient;
                    result.splice(operationIndex-1, 2);
                    break;

                case '+':
                    const sum = +result[operationIndex-1] / result[operationIndex+1];
                    console.log(sum);
                    result[operationIndex+1] = sum;
                    result.splice(operationIndex-1, 2);
                    break;

                case '-':
                    const difference = +result[operationIndex-1] / result[operationIndex+1];
                    console.log(difference);
                    result[operationIndex+1] = difference;
                    result.splice(operationIndex-1, 2);
                    break;
                
                default:
                    currentOperation.splice(0, 1);
            }

        }

        console.log('baby', result);
    }

    

    evaluateValue();
   
    const Screen = (screen:Screen) => {
        return(
            <InputGroup size="lg" className={screen.styling}>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    disabled
                />{screen.output}
            </InputGroup>
        )
    }

    const Buttons = (btns:Buttons) => {
        return(
            <Button className={btns.styling} onClick={btns.clickEvent}>
                {btns.btnNumber}
            </Button>
        )
    }

    const btnValue = (val: number) =>{
        console.log(val);
        setOutputField((prevState) => {
            return prevState + val.toString();
        })
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
                                    {[1,2,3].map(value => 
                                            <Col md={3}>
                                                <Buttons styling="numerical" btnNumber={value.toString()} clickEvent={() => {
                                                    btnValue(value);
                                                }}/>
                                            </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="&#247;"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    {[4,5,6].map(value => 
                                        <Col md={3}>
                                            <Buttons styling="numerical" btnNumber={value.toString()}
                                                clickEvent={() => {
                                                btnValue(value);
                                            }}/>
                                        </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="X"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    {[7,8,9].map(value => 
                                        <Col md={3}>
                                            <Buttons styling="numerical" btnNumber={value.toString()}
                                                clickEvent={() => {
                                                btnValue(value);
                                            }}/>
                                        </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="-"/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={9}><Buttons styling="numerical" btnNumber="0" clickEvent={btnValue}/></Col>
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