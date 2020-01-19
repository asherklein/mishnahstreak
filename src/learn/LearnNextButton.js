import React from 'react'
import Button from 'react-bootstrap/Button'
export default ({ mas, perek, mishnah, learnNext }) => <Button onClick={learnNext} variant="success" size="lg" block>
    {`${mas} | Perek ${perek} | Mishnah ${mishnah}`}</Button>