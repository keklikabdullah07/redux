import './App.css';
import Counter from './components/Counter'
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'
import { Container, Row, Col, Nav, NavItem, NavLink, Placeholder, } from "reactstrap"

import Partridge from './images/partridge.png'
import Redux from "./images/redux.png"
import Reactjsimg from "./images/reactjsimg.png"
function App() {
  return (
    <div>
      <Placeholder animation="glow" tag="p">
        <Placeholder xs={12} />
      </Placeholder>
      <Nav justified>
        <Container>
          <Row>
            <Col xs="4">
              <NavItem>
                <NavLink active href="https://github.com/keklikabdullah07">
                  <img src={Partridge} width="110" height="" alt="" />
                </NavLink>
              </NavItem>
            </Col>
            <Col xs="4">
              <NavItem>
                <NavLink active href="https://redux.js.org/">
                  <img src={Redux} width="200" height="" alt="" />
                </NavLink>
              </NavItem>
            </Col>
            <Col xs="4">
              <NavItem>
                <NavLink active href="https://tr.reactjs.org/">
                  <br /><img src={Reactjsimg} width="205" height="" alt="" />
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
      <Placeholder animation="glow" tag="p">
        <Placeholder xs={12} />
      </Placeholder>
      <br />

      <Counter />
      <br />
      <br />
      <Container align="center">
        <Row>
          <Col><IncreaseCounter /></Col>
          <Col><DecreaseCounter /></Col>
          <Col><IncreaseByTwoCounter /></Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
