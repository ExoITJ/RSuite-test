import React, { FC } from "react";
import { SimpleContent } from "../simple-content/SimpleContent";

export const Dashboard: FC = () => {
  return (
    <SimpleContent header="Главная страница">
      <small>Какая-то информация</small>
    </SimpleContent>
  );
};
