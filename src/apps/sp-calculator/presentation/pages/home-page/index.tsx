import React from "react";
import { Layout, Table, TableColumnsType, theme, Typography } from "antd";
import { useDomain } from "../../hooks/use-domain";
import { DevelopersRepository } from "../../../domain/repositories/developers.repository";
import { SprintsRepository } from "../../../domain/repositories/sprints.repository";
import { DeveloperReportsRepository } from "../../../domain/repositories/developer-reports.repository";
import { DeveloperReportsService } from "../../../domain/services/developer-reports.service";
import { Sprint } from "../../../domain/models/sprint";
import { Developer } from "../../../domain/models/developer";

interface SprintDataType {
  sprint: Sprint;
  key: React.Key;
  name: string;
  hoursSum: number;
  storyPointsSum: number;
  averageStoryPointCostByTeam: number | null;
  averageStoryPointCostByDeveloper: number | null;
}
interface SprintDeveloperDataType {
  key: React.Key;
  name: string;
  hours: number;
  storyPoints: number;
  storyPointCost: number | null;
}
interface DeveloperDataType {
  developer: Developer;
  key: React.Key;
  name: string;
  hoursSum: number;
  storyPointsSum: number;
  averageStoryPointCostByTeam: number | null;
}
interface DeveloperSprintDataType {
  key: React.Key;
  name: string;
  hours: number;
  storyPoints: number;
  storyPointCost: number | null;
}

export const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const domain = useDomain();
  const developersRepository = domain.getRepository(DevelopersRepository);
  const sprintsRepository = domain.getRepository(SprintsRepository);
  const developerReportsRepository = domain.getRepository(
    DeveloperReportsRepository
  );
  const developerReportsService = domain.getService(DeveloperReportsService);

  const developers = developersRepository.findAll();
  const sprints = sprintsRepository.findAll();

  // Sprints
  function renderSprintDevelopers(sprint: Sprint) {
    const columns: TableColumnsType<SprintDeveloperDataType> = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Hours", dataIndex: "hours", key: "hours" },
      { title: "StoryPoints", dataIndex: "storyPoints", key: "storyPoints" },
      {
        title: "StoryPoint Cost",
        dataIndex: "storyPointCost",
        key: "storyPointCost",
      },
    ];
    const data: SprintDeveloperDataType[] = developers.map((developer) => {
      const report = developerReportsRepository.findByDeveloperAndSprint(
        developer,
        sprint
      );

      return {
        key: developer.id,
        name: developer.name,
        hours: report?.hours || 0,
        storyPoints: report?.storyPoints || 0,
        storyPointCost:
          developerReportsService.getStoryPointCost(developer, sprint) || 0,
      };
    });
    return <Table columns={columns} dataSource={data} pagination={false} />;
  }
  function renderSprints() {
    const columns: TableColumnsType<SprintDataType> = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Hours Sum", dataIndex: "hoursSum", key: "hoursSum" },
      {
        title: "StoryPoints Sum",
        dataIndex: "storyPointsSum",
        key: "storyPointsSum",
      },
      {
        title: "Average StoryPoint Cost (Team)",
        dataIndex: "averageStoryPointCost",
        key: "averageStoryPointCost",
      },
      {
        title: "Average StoryPoint Cost (Developer)",
        dataIndex: "averageStoryPointCostByDeveloper",
        key: "averageStoryPointCostByDeveloper",
      },
    ];
    const data: SprintDataType[] = sprints.map((sprint) => ({
      sprint,
      key: sprint.id,
      name: sprint.name,
      hoursSum: developerReportsService.getHoursSumFromBy(sprint),
      storyPointsSum: developerReportsService.getStoryPointsSumBy(sprint),
      averageStoryPointCostByTeam:
        developerReportsService.getAverageStoryPointCostBy(sprint),
      averageStoryPointCostByDeveloper:
        developerReportsService.getSubjectAverageStoryPointCostBy(sprint),
    }));

    function expandedRowRender(record: SprintDataType) {
      return renderSprintDevelopers(record.sprint);
    }

    return (
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
        dataSource={data}
        size="small"
      />
    );
  }
  function renderSprintsCard() {
    return (
      <div
        className="site-layout-content"
        style={{
          background: colorBgContainer,
          padding: "0 24px 24px",
        }}
      >
        <Typography.Title level={2}>Sprints</Typography.Title>
        <div>{renderSprints()}</div>
      </div>
    );
  }

  // Developers
  function renderDeveloperSprint(developer: Developer) {
    const columns: TableColumnsType<DeveloperSprintDataType> = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Hours", dataIndex: "hours", key: "hours" },
      { title: "StoryPoints", dataIndex: "storyPoints", key: "storyPoints" },
      {
        title: "StoryPoint Cost",
        dataIndex: "storyPointCost",
        key: "storyPointCost",
      },
    ];
    const data: DeveloperSprintDataType[] = sprints.map((sprint) => {
      const report = developerReportsRepository.findByDeveloperAndSprint(
        developer,
        sprint
      );

      return {
        key: sprint.id,
        name: sprint.name,
        hours: report?.hours || 0,
        storyPoints: report?.storyPoints || 0,
        storyPointCost:
          developerReportsService.getStoryPointCost(developer, sprint) || 0,
      };
    });

    return <Table columns={columns} dataSource={data} pagination={false} />;
  }
  function renderDevelopers() {
    const columns: TableColumnsType<DeveloperDataType> = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Hours Sum", dataIndex: "hoursSum", key: "hoursSum" },
      {
        title: "StoryPoints",
        dataIndex: "storyPointsSum",
        key: "storyPointsSum",
      },
      {
        title: "Average StoryPoint Cost",
        dataIndex: "averageStoryPointCost",
        key: "averageStoryPointCost",
      },
    ];
    const data: DeveloperDataType[] = developers.map((developer) => {
      return {
        developer,
        key: developer.id,
        name: developer.name,
        hoursSum: developerReportsService.getHoursSumFromBy(developer),
        storyPointsSum: developerReportsService.getStoryPointsSumBy(developer),
        averageStoryPointCostByTeam:
          developerReportsService.getAverageStoryPointCostBy(developer),
      };
    });

    function expandedRowRender(record: DeveloperDataType) {
      return renderDeveloperSprint(record.developer);
    }

    return (
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
        dataSource={data}
        size="small"
      />
    );
  }
  function renderDevelopersCard() {
    return (
      <div
        className="site-layout-content"
        style={{
          background: colorBgContainer,
          padding: "0 24px 24px",
        }}
      >
        <Typography.Title level={2}>Sprints</Typography.Title>
        <div>{renderDevelopers()}</div>
      </div>
    );
  }

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
        {renderSprintsCard()}
        {renderDevelopersCard()}
      </Layout.Content>
    </Layout>
  );
};
