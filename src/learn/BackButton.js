import React from 'react'
import Button from 'react-bootstrap/Button'
export default ({ goBack }) => <Button onClick={goBack} variant="danger" size="lg">{'<-'}</Button>