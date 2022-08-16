import React, { FC } from "react";
import { Col, Panel, Row } from "rsuite";
import { SimpleContent } from "../simple-content/SimpleContent";

export const Menu: FC = () => {
  return (
    <SimpleContent header="Меню">
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
    </SimpleContent>
  );
};
