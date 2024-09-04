import { Button, List, Typography } from "antd";
const { Text } = Typography;

const JobApplicantsList = ({ data }) => {
  return (
    <List
      pagination={{ position: "bottom", align: "center", pageSize: 5 }}
      dataSource={data}
      rowKey={(item) => item.id}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="link"
              href={"/employer/applicant/" + item.id}
              target={"_blank"}
            >
              View Profile
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={`${item.firstName} ${item.lastName}`}
            description={<JobsDescription item={item} />}
          />
        </List.Item>
      )}
    />
  );
};

const JobsDescription = ({ item }) => {
  const { skillset } = item;
  return <Text type="secondary">Skills: {`${skillset}`}</Text>;
};

export default JobApplicantsList;
