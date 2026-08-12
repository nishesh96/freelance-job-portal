import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex, Form, Input, Layout, message, Radio } from "antd";
import { loginUser } from "state/slices/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userToken, isLoading, userType, error } = useSelector(
    (state) => state.auth,
  );

  const onFinish = async (values) => {
    let { username, password, userType } = values;
    if (username && password && userType) {
      dispatch(loginUser({ username, password, userType }));
    }
  };

  useEffect(() => {
    if (userToken && userType === "freelancer") {
      navigate("/freelancer");
    } else if (userToken && userType === "employer") {
      navigate("/employer");
    }
  }, [userToken, isLoading, userType, navigate]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  return (
    <Layout>
      <Flex
        align="center"
        justify="center"
        style={{ height: "100vh", backgroundColor: "aqua" }}
      >
        <Card title="Job Portal Login">
          <Form
            name="login-form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 14,
            }}
            style={{
              width: 500,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Login as"
              name="userType"
              initialValue={"freelancer"}
            >
              <Radio.Group optionType="button" defaultValue="freelancer">
                <Radio.Button value="freelancer">Freelancer</Radio.Button>
                <Radio.Button value="employer">Employer</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              initialValue="demouser"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input value="demouser" placeholder="Type demouser" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              initialValue="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password value="password" placeholder="Type password" />
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
      </Flex>
    </Layout>
  );
};

export default LoginPage;
