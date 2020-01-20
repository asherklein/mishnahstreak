import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import { getLearned, learnN } from './data-local'
import nezikin from './nezikin-lookup'
import LearnNextButton from './learn/LearnNextButton'
import BackButton from './learn/BackButton'
import Ratio from './kpis/ratio/App'
import Est from './kpis/estimated-completion/App'
import Streak from './kpis/streak/App'
import { PER_DAY } from './settings.json'
import moment from 'moment'



const App = () => {

  const [learned, setLearned] = useState([])
  const fromLocalStorage = () => getLearned().then(setLearned)
  useEffect(() => {
    fromLocalStorage()
  }, [])
  const learnLocal = (n, date) => {
    learnN(n, date)
    .then(setLearned)
  } 
  return (
    <div className="App">
      <header className="App-header">

        <Container>
          <Row>
            <Col>
              <Ratio learned={learned.length} total={nezikin.length} />
            </Col>
            <Col>
              <Streak learned={learned} />
            </Col>
            <Col>
              <Est remaining={nezikin.length - learned.length} perDay={PER_DAY} />
            </Col>
          </Row>
          <Row><br /></Row>
          <Row>
            <Col xs={3}><BackButton goBack={() => learnLocal(-1)} /></Col>
            <Col xs={9}><LearnNextButton {...nezikin[learned.length]} learnNext={() => learnLocal(1, moment().subtract(0, 'days').toISOString())} /></Col>

          </Row>

        </Container>
      </header>
    </div>
  );
}

export default App;
