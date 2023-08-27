import React from "react";
import { Layout, theme, Typography } from "antd";

export const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      className="layout"
      style={{ minHeight: "100vh", justifyContent: "flex-start" }}
    >
      <Layout.Content
        style={{
          padding: "24px 50px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            padding: "0 24px 24px",
          }}
        >
          <Typography.Title level={2}>Developers</Typography.Title>
        </div>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            padding: "0 24px 24px",
          }}
        >
          <Typography.Title level={2}>Sprints</Typography.Title>
        </div>
      </Layout.Content>
    </Layout>
  );
};
