import React, { FC, useState } from "react";
import { Button, ButtonToolbar, Col, FlexboxGrid, Input, Row } from "rsuite";
import { SimpleContent } from "../simple-content/SimpleContent";
import { ChangeUserPasswordModal } from "./change-user-password-modal/ChangeUserPasswordModal";

export const User: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SimpleContent header="Пользователь">
        <Row>
          <Col xs={24} md={12}>
            <div style={{ marginBottom: "10px" }}>
              <label>Имя</label>
              <Input
                type="name"
                value={firstName}
                onChange={setFirstName}
                style={{ marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Фамилия</label>
              <Input
                type="name"
                value={lastName}
                onChange={setLastName}
                style={{ marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Почта</label>
              <Input
                type="email"
                value={email}
                onChange={setEmail}
                style={{ marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Телефон</label>
              <Input
                type="phone"
                value={phone}
                onChange={setPhone}
                style={{ marginTop: "5px" }}
              />
            </div>
            <ButtonToolbar>
              <FlexboxGrid justify="space-between">
                <FlexboxGrid.Item>
                  <Button size="sm" color="violet" appearance="primary">
                    Сохранить
                  </Button>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Button
                    size="sm"
                    color="red"
                    appearance="primary"
                    onClick={() => setShowModal(true)}
                  >
                    Сменить пароль
                  </Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </ButtonToolbar>
          </Col>
        </Row>
      </SimpleContent>
      <ChangeUserPasswordModal
        showModal={showModal}
        postProcessingFunction={() => setShowModal(false)}
      />
    </>
  );
};
