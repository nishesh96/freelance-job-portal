import { Button, Form, Input, Select, Card } from "antd";
import { useEffect } from "react";

const FreelancerCreateProfileCard = ({
  form,
  onFinish,
  skillsetOptions,
  user,
}) => {
  useEffect(() => {
    if (user.firstName) {
      form.setFieldsValue({
        firstName: user.firstName,
        lastName: user.lastName,
        skillset: user.skillset,
        githubUserName: user.githubId,
      });
    }
  }, [user, form]);

  return (
    <Card title="Profile Settings" style={{ width: 500 }}>
      <Form layout={"vertical"} form={form} onFinish={onFinish}>
        <Form.Item
          label="First Name"
          name="firstName"
          initialValue={user.firstName}
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input placeholder="John" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          initialValue={user.lastName}
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input placeholder="Doe" />
        </Form.Item>
        <Form.Item
          label="Skills"
          name="skillset"
          initialValue={user.skillset}
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Select or Add a skill"
            options={skillsetOptions}
          />
        </Form.Item>
        <Form.Item
          label="GitHub User Name"
          name="githubUserName"
          initialValue={user.githubId}
          rules={[
            {
              required: true,
              message: "Please input value",
            },
          ]}
        >
          <Input placeholder="user123" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FreelancerCreateProfileCard;
