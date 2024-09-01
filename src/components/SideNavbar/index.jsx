import { Flex, Menu, Typography } from "antd";
import { UserOutlined, BarChartOutlined } from "@ant-design/icons";
import { USER_TYPES } from "constants";

const { Text } = Typography;

const freelancerMenuItems = [
  {
    key: "view-profile",
    icon: <UserOutlined />,
    label: "View Profile",
  },
  {
    key: "view-jobs",
    icon: <BarChartOutlined />,
    label: "Jobs",
  },
  {
    key: "profile-settings",
    icon: <UserOutlined />,
    label: "Profile Settings",
  },
];

const employerMenuItems = [
  {
    key: "jobs",
    icon: <BarChartOutlined />,
    label: "Jobs",
  },
  {
    key: "post-job",
    icon: <UserOutlined />,
    label: "Post a Job",
  },

  // {
  //   key: "profile-settings",
  //   icon: <UserOutlined />,
  //   label: "Profile Settings",
  // },
];

const menuItems = {
  [USER_TYPES.freelancer]: freelancerMenuItems,
  [USER_TYPES.employer]: employerMenuItems,
};

const SideNavbar = ({ onClick, currentNavKey, userType }) => {
  return (
    <>
      <Flex align="center" justify="flex-start">
        <Text
          level={4}
          style={{
            color: "white",
            margin: "15px 25px",
            fontSize: "25px",
            fontWeight: 700,
          }}
        >
          Job Portal{" "}
        </Text>
      </Flex>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentNavKey]}
        items={menuItems[userType]}
        onClick={onClick}
        style={{
          marginTop: "30px",
        }}
      />
    </>
  );
};

export default SideNavbar;
