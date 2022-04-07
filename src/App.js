import { Provider } from "react-redux";
import { Row, Col } from 'antd'

import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Row>
          <Col span={4}>
            <Categories />
          </Col>
          <Col span={15}>
            <Content />
          </Col>
          <Col span={5}>
            <Cart />
          </Col>
        </Row>
      </Provider>
    </>
  );
}

export default App;
