import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Form,Button,Card,ListGroup,Row,Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { insert,del,delAll } from '../actions/formAction'

const HomeScreen = () => {
    const [inputData, setInputData] = useState('')

    const dispatch = useDispatch()

    const list = useSelector(state => state.formReducer.list)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(insert(inputData))
        setInputData('')
    }

    const deleteAllHandler = () => {
        dispatch(delAll())
    }
    return (
        <>
            <div className='text-center my-5'>
                <h1 style={{fontWeight:'bold'}}>REACT-REDUX TODO</h1>
                <FormContainer>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className='my-5' controlId='inputData'>
                            <Form.Control type="text" placeholder="Write a Task to do ..."  
                            value={inputData} onChange={(e) => setInputData(e.target.value)}  required/>
                        </Form.Group>
                        <Button type='submit' variant='primary'> Submit </Button>
                    </Form>
                </FormContainer>
            </div>
            <div>
                {list.map((e)=>{
                    return (
                        
                        <FormContainer key={e.id} >
                        <div className='text-center '>
                        <Card className='mb-3'>
                                <ListGroup variant="flush" >
                                
                                    <ListGroup.Item>
                                        <Row className='d-flex justify-content-md-center'>
                                            <Col >
                                                <h2>{e.data}</h2>
                                            </Col>
                                            <Col>
                                                <h2>
                                                    <i className="fas fa-trash-alt" style={{color:'red',cursor:'pointer'}} title='Delete Item' onClick={()=>dispatch(del(e.id))}></i>
                                                </h2>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                            
                        </FormContainer>
                        
                    )
                    
                })}
                {list.length !== 0 ? 
                <FormContainer >
                    <Row className='my-5'>
                        <Button onClick={deleteAllHandler}>Remove All</Button>
                    </Row>
                </FormContainer> : null}
                
            </div>
        </>
    )
}

export default HomeScreen
