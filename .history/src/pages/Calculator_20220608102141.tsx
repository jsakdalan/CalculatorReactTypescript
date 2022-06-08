import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Calculator.css';
import { Alert } from 'react-bootstrap';

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
    const[isError, setIsError] = useState<boolean>(false);

    const evaluateValue = () => {

        let value = '';
        let currentOperation = ['*', '/', '+', '-'];

        const result:string[] = [];
        
        outputField.split('').forEach(element => {
            if(isNaN(parseInt(element))){
                if(value){
                    result.push(value);
                    value = '';
                }
                result.push(element);
            }else{
                value += element;
            }
        });

        if(value){
            result.push(value);
        }

        while(result.length > 1){
            
            const operationIndex = result.findIndex(element => element === currentOperation[0]);    
            // if(isNaN(+result[operationIndex+1])){
            //     console.log(+result[operationIndex-1])
            //     setIsError(true);
            //     setTimeout(() => {
            //         setIsError(false);
            //         setOutputField('');
            //     },1000)
            // }

            switch(result[operationIndex]){

                case '*': 
                    const prod = (+result[operationIndex-1]) * (+result[operationIndex+1]);
                    result[operationIndex+1] = prod.toString();
                    result.splice(operationIndex-1, 2);
                    break;

                case '/':
                    const quotient = (+result[operationIndex-1]) / (+result[operationIndex+1]);
                    result[operationIndex+1] = quotient.toString();
                    result.splice(operationIndex-1, 2);
                    break;

                case '+':
                    const sum = (+result[operationIndex-1]) + (+result[operationIndex+1]);
                    result[operationIndex+1] = sum.toString();
                    result.splice(operationIndex-1, 2);
                    break;

                case '-':
                    const difference = (+result[operationIndex-1]) - (+result[operationIndex+1]);
                    result[operationIndex+1] = difference.toString();
                    result.splice(operationIndex-1, 2);
                    break;
                
                default:
                    console.log(result)
                    currentOperation.splice(0, 1);
            }
        }

        if(isNaN(result)){
            console.log('nice')
        }
        setOutputField(result[0]);
    }

    const eraseAll = () => {
        setOutputField('');
    }
   
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

    const btnValue = (val: string) =>{
        console.log(val);
        setOutputField((prevState) => {
            return prevState + val.toString();
        })
    }

    return(
        <>
            {
                isError&&<Alert variant='danger'>Error.</Alert>
            }
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
                                                    btnValue(value.toString());
                                                }}/>
                                            </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="&#247;" clickEvent={() => { btnValue('/');}}/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    {[4,5,6].map(value => 
                                        <Col md={3}>
                                            <Buttons styling="numerical" btnNumber={value.toString()}
                                                clickEvent={() => {
                                                btnValue(value.toString());
                                            }}/>
                                        </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="X" clickEvent={() => { btnValue('*');}}/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    {[7,8,9].map(value => 
                                        <Col md={3}>
                                            <Buttons styling="numerical" btnNumber={value.toString()}
                                                clickEvent={() => {
                                                btnValue(value.toString());
                                            }}/>
                                        </Col>
                                    )}
                                    <Col md={3}><Buttons styling="operational" btnNumber="-" clickEvent={() => { btnValue('-');}}/></Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={9}><Buttons styling="numerical" btnNumber="0" clickEvent={()=> {btnValue('0')}}/></Col>
                                    <Col md={3}><Buttons styling="numerical" btnNumber="+" clickEvent={() => { btnValue('+');}}/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md={12}><Buttons styling="erase" btnNumber="C" clickEvent={eraseAll}/></Col>
                                    <Col md={12}><Buttons styling="equals" btnNumber="=" clickEvent={evaluateValue}/></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}