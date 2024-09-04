import { Card, Flex, Radio, Select, Space, Typography } from "antd";
import { SKILLSET } from "../../constants";

const { Title } = Typography;
const SALARY_RANGES = [
  { label: "Any", value: "" },
  {
    label: "< $10",
    value: "10",
  },
  {
    label: "< $30",
    value: "30",
  },
  {
    label: "< $50",
    value: "50",
  },
];

const JobsFilter = ({ handleFilterChange }) => {
  return (
    <Card title="Filter">
      <Flex vertical>
        <Title level={5}>Salary Per Hour</Title>
        <Radio.Group
          name="minSalary"
          onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          defaultValue={SALARY_RANGES[0].value}
        >
          <Space direction="vertical">
            {SALARY_RANGES.map((salary) => (
              <Radio key={salary.value} value={salary.value}>
                {salary.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        <Title level={5}>Skills</Title>
        <Select
          mode="tags"
          placeholder="Skills"
          onChange={(value) => handleFilterChange("requiredSkills", value)}
          options={SKILLSET}
        />

        {/* <Title level={5}>Location</Title>
        <Select
          mode="tags"
          placeholder="location"
          onChange={(value) => handleFilterChange("location", value)}
          options={SKILLSET}
        /> */}
      </Flex>
    </Card>
  );
};

export default JobsFilter;
