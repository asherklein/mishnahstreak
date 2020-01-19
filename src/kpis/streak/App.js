import React from 'react'
import { compose, prop, reduced, reduceRight } from 'ramda'
import moment from 'moment'
import Card from 'react-bootstrap/Card'

const isWithinNDays = (n, prev, last) => {
    const lastDay = moment(last).startOf('day')
    const prevDay = moment(prev).startOf('day')
    return lastDay.isSameOrBefore(prevDay.add(n, 'days'))
}

const isToday = day => moment(day).startOf('day').isSame(moment().startOf('day'))

const streaker = ({ last, count }, prev) => {
    if (isToday(prev)) return { last, count: 1 }
    if (isWithinNDays(0, prev, last)) return { last, count }
    if (isWithinNDays(1, prev, last)) return { last: prev, count: count + 1 }
    return reduced({ last, count })
}

const computeStreak = compose(prop('count'), reduceRight(streaker, { last: moment(), count: 0 }))


export default ({ learned }) => <Card bg="info" text="white" style={{ width: '18rem' }}>
    <Card.Header>Streak</Card.Header>
    <Card.Body>
        {//<Card.Title>Days In A Row</Card.Title>
        }<Card.Text>
            {computeStreak(learned)}<br />
            Days In A Row
        </Card.Text>
    </Card.Body>
</Card>