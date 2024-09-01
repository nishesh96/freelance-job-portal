import React, { useState } from "react";
import { Form, Flex, Spin, Layout, message } from "antd";
import SideNavbar from "components/SideNavbar";
import FreelancerProfileCard from "components/FreelancerProfileCard";
import FreelancerCreateProfileCard from "components/FreelancerCreateProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { SKILLSET, USER_TYPES } from "../../constants";
import { setProfile } from "state/slices/freelancerSlice";
import HeaderComponent from "components/HeaderComponent";
import { logoutUser } from "state/slices/authSlice";
import { useNavigate } from "react-router-dom";
import FreelancerJobs from "components/FreelancerJobs";
const { Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const FreelancerPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentNavKey, setcurrentNavKey] = useState("profile-settings");

  const { userProfile, newUser } = useSelector((state) => ({
    newUser: state.freelancer.newUser,
    userProfile: state.freelancer.userProfile,
  }));

  const onFinish = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setProfile(values));
      setIsLoading(false);
      messageApi.success("Profile Submitted");
    }, 300);
  };

  const handleNavbarClick = (e) => {
    setcurrentNavKey(e.key);
  };

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Spin spinning={isLoading}>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <SideNavbar
            onClick={handleNavbarClick}
            currentNavKey={currentNavKey}
            userType={USER_TYPES.freelancer}
          />
        </Sider>
        <Layout
          style={{
            marginInlineStart: 200,
          }}
        >
          <HeaderComponent
            title={USER_TYPES.freelancer}
            onButtonClick={logOut}
          />
          <Content
            style={{
              margin: "20px 16px 0",
              overflow: "initial",
              height: "83vh",
            }}
          >
            {currentNavKey === "profile-settings" && (
              <Flex gap="middle" align="center" vertical>
                {contextHolder}
                <FreelancerCreateProfileCard
                  form={form}
                  onFinish={onFinish}
                  skillsetOptions={SKILLSET}
                />
              </Flex>
            )}
            {currentNavKey === "view-profile" && (
              <Flex gap="middle" align="center" vertical>
                <FreelancerProfileCard newUser={newUser} user={userProfile} />
              </Flex>
            )}

            {currentNavKey === "view-jobs" && <FreelancerJobs />}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default FreelancerPage;
