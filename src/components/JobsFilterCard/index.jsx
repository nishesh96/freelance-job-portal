import { Card, Flex, Radio, Select, Space, Typography } from "antd";
import { SKILLSET, LOCATIONS, SALARY_RANGES } from "../../constants";

const { Text } = Typography;

const JobsFilter = ({ handleFilterChange }) => {
  return (
    <Card title="Filters" style={{ width: "21%", minHeight: 400 }}>
      <Flex vertical justify="start" style={{ gap: "10px" }}>
        <Text strong>Skills</Text>
        <Select
          mode="tags"
          placeholder="Select skill"
          onChange={(value) => handleFilterChange("requiredSkills", value)}
          options={SKILLSET}
        />
        <Text strong>Location</Text>
        <Select
          mode="tags"
          placeholder="Select location"
          onChange={(value) => handleFilterChange("location", value)}
          options={LOCATIONS}
        />
        <Text strong>Pay per hour</Text>

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
      </Flex>
    </Card>
  );
};

export default JobsFilter;
