import { Button, Card, List } from "antd";
import { USER_TYPES } from "constants";

const JobsList = ({ data, userType, onButtonClick }) => {
  return (
    <Card title={"Jobs List"}>
      {" "}
      <List
        pagination={{ position: "bottom", align: "center", pageSize: 5 }}
        dataSource={data}
        rowKey={(item) => item.id}
        renderItem={(item) => (
          <List.Item
            actions={
              USER_TYPES["freelancer"] === userType
                ? [
                    <Button
                      type="primary"
                      onClick={() => onButtonClick(item.id)}
                    >
                      Easy Apply
                    </Button>,
                  ]
                : [
                    <Button
                      type="default"
                      onClick={() => onButtonClick(item.id)}
                    >
                      View Applicants ({item.id})
                    </Button>,
                  ]
            }
          >
            <List.Item.Meta
              title={item.role}
              description={<JobsDescription item={item} />}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

const JobsDescription = ({ item }) => {
  const { companyName, skillset, minSalaryPerHour } = item;
  return (
    <p>
      {companyName} | Skills: {`${skillset}`} | Salary Per Hour: $
      {minSalaryPerHour}{" "}
    </p>
  );
};

export default JobsList;
