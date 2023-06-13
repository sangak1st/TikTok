import React from 'react';
import logo from '../assets/image/Symbol-Tiktok.png';
import avata from '../assets/image/pngtree-firefighters-png-image_5402887.jpg';
import './Navigation.css'
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Nav, InputGroup, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className='fw-bold fs-4'>TikTok</span>
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Nav className="me-auto">
                        <InputGroup>
                            <Form.Control
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                        </InputGroup>
                    </Nav>
                </Container>
                <Container className=''>
                    <Nav>
                        <Button variant="light" >
                            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                        </Button>{' '}
                        <Button variant="light" >
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </Button>{' '}
                        <Button variant="light" >
                            <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        </Button>{' '}
                        <Button className='profile'>
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
