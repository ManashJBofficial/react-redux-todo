import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
        <Container>
            <Row>
            <Col className='text-center py-3'>Developed By 
                <span style={{fontWeight:'bold'}}>
                    &nbsp;<a href='https://devmj.netlify.app' target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>Manash Jyoti Baruah</a></span></Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer