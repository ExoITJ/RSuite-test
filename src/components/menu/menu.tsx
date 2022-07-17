import React, { FC } from "react";
import { Col, Panel, Row } from "rsuite";

export const Menu: FC = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h4>Меню ресторана</h4>
      <hr style={{ marginBottom: "10px", marginTop: "10px" }} />
      <Row>
        <Col xs={24} md={12} style={{ marginBottom: "10px" }}>
          <Panel shaded bordered header={<h6>Салат цезарь</h6>}>
            <p>
              <small>Состав бомбезный</small>
            </p>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginBottom: "10px" }}>
          <Panel shaded bordered header={<h6>Паста карбонара</h6>}>
            <p>
              <small>Состав отличный</small>
            </p>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginBottom: "10px" }}>
          <Panel shaded bordered header={<h6>Домашний лимонад</h6>}>
            <p>
              <small>Состав полезный</small>
            </p>
          </Panel>
        </Col>
        <Col xs={24} md={12} style={{ marginBottom: "10px" }}>
          <Panel shaded bordered header={<h6>Чесночный соус</h6>}>
            <p>
              <small>Состав пикантный</small>
            </p>
          </Panel>
        </Col>
      </Row>
    </div>
  );
};
