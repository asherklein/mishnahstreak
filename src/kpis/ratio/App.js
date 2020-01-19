import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ learned, total }) =>
    <Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Completed</Card.Header>
    <Card.Body>
        {//<Card.Title>Days In A Row</Card.Title>
        }<Card.Text>
            {learned}<br />
            of {total}
        </Card.Text>
    </Card.Body>
</Card>