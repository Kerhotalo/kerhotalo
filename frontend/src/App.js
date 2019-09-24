import React from 'react';
import { Input, Row, Col, Typography, Layout } from 'antd';
import './App.css'
import background from './assets/videos/background.mp4'
const { Title } = Typography;
const { Search } = Input;
const { Paragraph } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <video  preload="none" autoplay="autoplay" loop="loop"  id="backvideo">
            <source src={background} type="video/mp4" />
        </video>
        <Row style={{"paddingTop": "40px"}}>
          <Col xs={24} sm={24} md={{span: 12, offset: 6}} lg={{span: 12, offset: 6}}>
            <Search
              placeholder="Hae kerhoa"
              enterButton="Hae"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
        <Row style={{"paddingTop": "40px"}}>
          
        </Row>
      </Content>
    </Layout>

  );
}

export default App;
