import React from 'react'
import { Form, Button, Image, Col, Row, Container, Alert, Card } from "react-bootstrap";




const PieChart = (title, series, value, colors) => {
  return (
    <Container>
        <Card>
            <Card.Body>
                {PieChart.title}
                {PieChart.value}
            </Card.Body>
        </Card>
    </Container>
  )
}

export default PieChart