import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { listRestaurants } from './directoryService';


function Lists() {

    const [restaurants, setRestaurants] = useState([
        {
            id: "1",
            nombre: "Pacifico mar",
            descrip: `Av. 85 Nro. 45 - 85 
             Barranquilla 
             Deliciosa comida de mar`,
url: require(`./imagenes/pacifico.jpeg`)
        },
        {
            id: "2",
            nombre: "Italiano 65",
            descrip: "Av 45 Nro 1 - 85 Medellín \n Deliciosa comida italiana",
            url: require(`./imagenes/italiano.jpg`)
        },
        {
            id: "3",
            nombre: "Fritos y Más",
            descrip: "Calle 45 Medellín \n Comida rápida",
            url: require(`./imagenes/fritos.jpg`)
        },
        {
            id: "4",
            nombre: "Pollo Frito",
            descrip: "Cr 32 # 56 - 89 \n Lo mejor del pollo frito",
         url: require(`./imagenes/pollo.jpg`)
        }
    ])

    /*
    const [restaurants, setRestaurants] = useState([]);

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
    */
    return (
        <Container className="contain-restaurant">
            <h1 className="pt-4 pb-4">Directorio Restaurente</h1>
            <Row className="mt-4" md={3}>
                {restaurants.map(item => (
                    <Col className="md-4" key={item.id}>
                    <Card className="mb-4 box-shadow">
                        <Card.Img 
                            className="card-img-top"
                            src={item.url}
                            alt="foto restaurante"
                            style={{ height: '225px'}}
                        />

<Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>{item.descrip}</Card.Text>
                            
                        </Card.Body>
                        {
                            /*
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>{item.address}</Card.Text>
                        </Card.Body>
                        */
}
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Lists;