import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { listRestaurants } from './directoryService';
import {restaurantes} from "./Constantes"

function Search() {


const [valores, setValores] = useState({})
    const {nombre =""} = valores
    const [resultado, setResultado] = useState([]);
    
    
    
    const handleOnChange = (e) => {

      setValores({ ...valores, [e.target.name]: e.target.value})
    }


    const buscador = (e) => {
      e.preventDefault();
      const filtro = restaurantes.
      filter(filtrar => filtrar.nombre.toUpperCase().includes(nombre.toUpperCase()));
      setResultado(filtro);
    }


    return (
    
        <Container> 
            <h1 className="pt-4 pb-4">Buscar Restaurante</h1>
            <Form onSubmit="">
                <Form.Group className="mb-3">
                    <Form.Label>Escribe el nombre</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="nombre" value={nombre} onChange={(e)=> {handleOnChange(e)}} />
                </Form.Group>
                <Button type="submit" onClick={buscador}>Buscar</Button>
            </Form>
            <Row className="mt-4" md={3}>
                {resultado.map(item => (
                    <Col className="md-4" key={item.id}>
                    <Card className="mb-4 box-shadow">
                        <Card.Img 
                            className="card-img-top"
                            src={item.url}
                            alt="foto restaurante 1"
                            style={{ height: '225px'}}
                        />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.descrip}</Card.Text>
                           
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );






    /*

    const [input, setInput] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const getName = e => {
        getRestaurants();
        setInput(e.target.value)
    }
    const searchRestaurant = e => {
        e.preventDefault();

        const restaurantList = restaurants.filter((el) =>
            el.name.toLowerCase().includes(input.toLowerCase())
        );
        setRestaurants(restaurantList)
        setInput([])
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try{
            const restaurantsFirebase = await listRestaurants();
            setRestaurants(restaurantsFirebase)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container> 
            <h1 className="pt-4 pb-4">Buscar Restaurante</h1>
            <Form onSubmit={searchRestaurant}>
                <Form.Group className="mb-3">
                    <Form.Label>Escribe el nombre</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={getName} />
                </Form.Group>
                <Button type="submit">Buscar</Button>
            </Form>
            <Row className="mt-4" md={3}>
                {restaurants.map(item => (
                    <Col className="md-4" key={item.id}>
                    <Card className="mb-4 box-shadow">
                        <Card.Img 
                            className="card-img-top"
                            src={item.url}
                            alt="foto restaurante 1"
                            style={{ height: '225px'}}
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>{item.address}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
    */
}

export default Search;