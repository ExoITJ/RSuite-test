import React, { FC } from "react";
import { Message } from "rsuite";
import styles from "./PasswordRules.module.scss";

type PasswordRulesProps = {
  className?: string;
};

export const PasswordRules: FC<PasswordRulesProps> = ({ className }) => {
  return (
    <Message type="info" className={className}>
      <h5>Требования к паролю</h5>
      <ul className={styles.rulesList}>
        <li className={styles.rulesListItem}>
          Ваш пароль должен быть длиннее 7 символов.
        </li>
        <li className={styles.rulesListItem}>
          Ваш пароль должен содержать хотя бы одну заглавную букву.
        </li>
        <li className={styles.rulesListItem}>
          Ваш пароль должен содержать хотя бы одну строчную букву.
        </li>
      </ul>
    </Message>
  );
};
