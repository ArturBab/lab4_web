import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Row, Button, Spinner} from "react-bootstrap";


function GetAmd(){

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>AMD RYZEN 5</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default GetAmd;