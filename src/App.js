import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import { getLearned, learnN } from './data-local'
import nezikin from './nezikin-lookup'
import LearnNextButton from './learn/LearnNextButton'
import Ratio from './kpis/ratio/App'
import Est from './kpis/estimated-completion/App'
import Streak from './kpis/streak/App'
import { PER_DAY } from './settings.json'



const App = () => {

  const [learned, setLearned] = useState([])
  useEffect(() => {
    getLearned().then(setLearned)
  })
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
            <Col><LearnNextButton {...nezikin[learned.length]} learnNext={() => learnN(1, new Date().toISOString())} /></Col>
            
          </Row>
          
        </Container>
      </header>
    </div>
  );
}

export default App;
