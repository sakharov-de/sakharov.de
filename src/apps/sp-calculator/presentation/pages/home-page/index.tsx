import React from "react";
import { Button, Space, DatePicker, version } from "antd";

export const HomePage: React.FC = () => (
  <div style={{ padding: "0 24px" }}>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </div>
);
