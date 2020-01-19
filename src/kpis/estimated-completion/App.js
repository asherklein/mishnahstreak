import React from 'react'
import moment from 'moment'
import Hebcal from 'hebcal'
import Card from 'react-bootstrap/Card'


const inNDays = n => {
    const today = moment()
    return today.add(n, 'days').toDate()
}


export default ({ remaining, perDay }) => {
    const daysRemaining = remaining / perDay
    const gregDate = inNDays(daysRemaining)
    const hebDate = new Hebcal.HDate(gregDate)
    return <Card bg="danger" text="white" style={{ width: '18rem' }}>
        <Card.Header>Siyum Date</Card.Header>
        <Card.Body>
            {//<Card.Title>Days In A Row</Card.Title>
            }<Card.Text>
                {gregDate.toDateString()}<br />
                {hebDate.toString('h')}
            </Card.Text>
        </Card.Body>
    </Card>
}