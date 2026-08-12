import { Card, List } from "antd";

const AppliedJobsList = ({ jobsList, appliedJobIds }) => {
  const appliedjobsList = appliedJobIds.map((jobId) => {
    const job = jobsList.find((job) => job.id === jobId);
    return job;
  });

  return (
    <Card title={"Applied Jobs"} style={{ width: "22%", minHeight: "400px" }}>
      {" "}
      <List
        dataSource={appliedjobsList}
        rowKey={(item) => item.id}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={item.companyName} description={item.role} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AppliedJobsList;
