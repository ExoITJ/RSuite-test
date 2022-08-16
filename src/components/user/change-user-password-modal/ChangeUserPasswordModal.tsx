import React, { FC, useState } from "react";
import { Button, Col, Drawer, Input, Row } from "rsuite";
import { PasswordRules } from "../../password-rules/PasswordRules";

type ChangeUserPasswordModalProps = {
  showModal: boolean;
  postProcessingFunction: () => void;
};

export const ChangeUserPasswordModal: FC<ChangeUserPasswordModalProps> = ({
  showModal,
  postProcessingFunction
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const passwordRegexp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g;

  const showSuccess = () => {
    let isValid = true;

    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      setConfirmPasswordError("Пароли не совпадают");
      return;
    }
    if (!passwordRegexp.test(password)) {
      setPasswordError("Пароль не соответствует требованиям");
      isValid = false;
    }
    if (!passwordRegexp.test(confirmPassword)) {
      setConfirmPasswordError("Пароль не соответствует требованиям");
      isValid = false;
    }

    if (!isValid) return;

    postProcessingFunction();
  };

  const onOpen = () => {
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  return (
    <Drawer
      placement="bottom"
      size="md"
      open={showModal}
      onClose={postProcessingFunction}
      backdrop="static"
      onOpen={onOpen}
    >
      <Drawer.Header>
        <Drawer.Title>Смена пароля пользователя</Drawer.Title>
        <Drawer.Actions>
          <Button
            size="sm"
            onClick={showSuccess}
            color="violet"
            appearance="primary"
          >
            Применить
          </Button>
          <Button size="sm" onClick={postProcessingFunction} color="blue">
            Отмена
          </Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>
        <div style={{ marginBottom: "10px" }}>
          <label>Новый пароль</label>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e);
              setPasswordError("");
            }}
            style={{ marginTop: "5px" }}
          />
          {passwordError && (
            <small style={{ color: "red" }}>{passwordError}</small>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Повторите пароль</label>
          <Input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e);
              setConfirmPasswordError("");
            }}
            style={{ marginTop: "5px" }}
          />
          {confirmPasswordError && (
            <small style={{ color: "red" }}>{confirmPasswordError}</small>
          )}
        </div>
        <PasswordRules />
      </Drawer.Body>
    </Drawer>
  );
};
