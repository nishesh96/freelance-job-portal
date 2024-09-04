import React, { useEffect } from "react";
import { Card, Tag, List, Typography, Spin, message } from "antd";
import useGithubProjects from "hooks/useGithubProjects";

const { Title, Text } = Typography;

const getGitHubRepoLink = (repo) => {
  return `https://github.com/nishesh96/${repo}`;
};

const FreelancerProfileCard = ({ newUser, user }) => {
  const { projects, loading, error } = useGithubProjects(user.githubUserName);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      messageApi.error(error);
    }
  }, [error, messageApi]);

  if (newUser) {
    return (
      <Card style={{ width: 500 }}>
        <Text type="danger">
          Kindly fill your details from Profile Settings.
        </Text>
      </Card>
    );
  }

  return (
    <Spin spinning={loading}>
      {contextHolder}
      <Card
        title={<Title level={3}>{`${user.firstName} ${user.lastName}`}</Title>}
        style={{ width: 500 }}
      >
        <Title level={5} style={{ marginTop: 0 }}>
          Skills
        </Title>
        {user?.skillset?.map((skill) => (
          <Tag key={skill} color="blue">
            {skill}
          </Tag>
        ))}
        <Title level={5} style={{ marginTop: "16px" }}>
          GitHub Projects
        </Title>
        <List
          size="small"
          dataSource={projects ?? []}
          pagination={{
            size: "small",
            position: "bottom",
            align: "center",
            pageSize: 5,
          }}
          renderItem={(item) => (
            <List.Item>
              <a
                href={getGitHubRepoLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </List.Item>
          )}
        />
      </Card>
    </Spin>
  );
};

export default FreelancerProfileCard;
