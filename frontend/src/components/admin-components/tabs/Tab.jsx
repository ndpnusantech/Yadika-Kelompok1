import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Sonnet from "./Sonnet";
import styled from "styled-components";


const TabContainer = styled.div`
  .nav-link {
    color: black;
    background-color: #e2e2e2;
    font-size: 12px;
    border-radius: 0px;
    margin: 0px 3px;
    text-align: center;
    padding: 2px 10px;
  }
  .nav-link.active1 {
    background-color: black;
    color: white;
  }

  .tab-container{
    width : auto;
    height : 200px;
  }
  
`;

const TabComponent = () => {
  const [activeKey, setActiveKey] = useState("first");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <TabContainer>
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeKey}
        onSelect={handleSelect}
      >
        <Col sm={3}>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className={activeKey === "first" ? "active1" : ""}
              >
                Tab 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className={activeKey === "second" ? "active1" : ""}
              >
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Row>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Sonnet />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Sonnet />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </TabContainer>
  );
};

export default TabComponent;
