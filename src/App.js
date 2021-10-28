import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { counter } from "./states/counter";
import { Row, Col, Typography } from "antd";

import "./App.css";

function App() {
  const [counterValue, setCounterValue] = useRecoilState(counter);

  useEffect(() => {
    setTimeout(() => setCounterValue(counterValue + 1), 1000);
  }, [counterValue]);

  return (
    <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
      <Col span={8} />
      <Col span={8} style={{ textAlign: "center" }}>
        <Typography.Title>ReactJS Template</Typography.Title>
        <Typography.Paragraph>
          Created by Raka Khairil Azhar
        </Typography.Paragraph>
        <Typography.Paragraph>{counterValue}</Typography.Paragraph>
      </Col>
      <Col span={8} />
    </Row>
  );
}

export default App;
