import { Button, Card, List } from "antd";
import { USER_TYPES } from "constants";

const JobsList = ({ data, userType, onButtonClick }) => {
  return (
    <Card
      title={
        USER_TYPES["freelancer"] === userType ? "Available Jobs" : "Posted Jobs"
      }
      style={{
        width: USER_TYPES["freelancer"] === userType ? "50%" : "100%",
        minHeight: 400,
      }}
    >
      {" "}
      <List
        pagination={{ position: "bottom", align: "center", pageSize: 5 }}
        dataSource={data}
        rowKey={(item) => item?.id}
        renderItem={(item) => (
          <List.Item
            actions={
              USER_TYPES["freelancer"] === userType
                ? [
                    <Button
                      type="primary"
                      onClick={() => onButtonClick(item.id)}
                    >
                      Apply
                    </Button>,
                  ]
                : [
                    <Button
                      type="primary"
                      onClick={() => onButtonClick(item.id)}
                    >
                      Applicants ({item.minSalaryPerHour})
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
  const { companyName, skillset, minSalaryPerHour, location } = item;
  return (
    <p>
      {companyName} | Skill Required: {`${skillset}`} | Pay/hour: $
      {minSalaryPerHour} | Location: {location}
    </p>
  );
};

export default JobsList;
