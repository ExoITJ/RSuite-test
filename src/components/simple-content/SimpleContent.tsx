import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

type SimpleContentProps = {
  header: string;
  children: any;
};

export const SimpleContent: FC<SimpleContentProps> = ({ header, children }) => {
  return (
    <div style={{ padding: "20px", height: "100%" }}>
      <Helmet>
        <title>{header}</title>
      </Helmet>
      <h4>{header}</h4>
      <hr style={{ marginBottom: "10px", marginTop: "10px" }} />
      {children}
    </div>
  );
};
