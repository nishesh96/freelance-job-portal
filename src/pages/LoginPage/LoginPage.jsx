import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Checkbox, Flex, Form, Input, Layout, Radio } from "antd";
import { registerUser } from "state/slices/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userToken, isLoading, userType } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    let { username, password, userType } = values;

    if (username && password && userType) {
      dispatch(registerUser({ username, password, userType }));

      // const token = await mockApiLogin(loginId, password, userType);
      // if (token) {
      //   if (userType === "freelancer") {
      //     navigate("/freelancer/profile");
      //   } else if (userType === "employer") {
      //     navigate("/employer");
      //   }
      // } else {
      //   console.log("Incorrect UserName or Password");
      // }
    } else {
      // console.log("Please fill in all fields");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // console.log("userType", userType);
    // console.log("userToken", userToken);
    if (userToken && userType === "freelancer") {
      navigate("/freelancer");
    } else if (userToken && userType === "employer") {
      navigate("/employer");
    }
  }, [userToken, isLoading, userType]);

  return (
    <Layout>
      <Flex align="center" justify="center" style={{ height: "100vh" }}>
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
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Login as"
              name="userType"
              initialValue={"freelancer"}
            >
              <Radio.Group>
                <Radio.Button value="freelancer">Freelancer</Radio.Button>
                <Radio.Button value="employer">Employer</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
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
