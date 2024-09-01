import React, { useState, useEffect } from "react";
import { Button, Layout, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import JobsList from "components/JobsList/JobsList";
import PostJobForm from "components/PostJobForm";
import { JOBS_DATA, USER_TYPES } from "constants";
import SideNavbar from "components/SideNavbar";
import HeaderComponent from "components/HeaderComponent";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "state/slices/authSlice";
import {
  fetchApplicantList,
  fetchEmployerJobs,
} from "state/slices/employerSlice";
import ViewJobApplicantsModal from "components/ViewJobApplicantsModal";
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

const EmployerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { jobsList, isLoading } = useSelector((state) => state.employer);
  const [currentNavKey, setcurrentNavKey] = useState("jobs");

  const handleJobApplicantModalOpen = (id) => {
    setModalOpen(true);
  };

  const handleJobApplicantModalClose = () => {
    setModalOpen(false);
  };

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleNavbarClick = (e) => {
    setcurrentNavKey(e.key);
  };

  useEffect(() => {
    dispatch(fetchEmployerJobs());
    dispatch(fetchApplicantList());
  }, []);

  return (
    <Spin spinning={isLoading}>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <SideNavbar
            onClick={handleNavbarClick}
            currentNavKey={currentNavKey}
            userType={USER_TYPES.employer}
          />
        </Sider>
        <Layout
          style={{
            marginInlineStart: 200,
            height: "100vh",
          }}
        >
          <HeaderComponent title={USER_TYPES.employer} onButtonClick={logOut} />
          <Content
            style={{
              margin: "20px 16px 0",
              overflow: "initial",
            }}
          >
            {currentNavKey === "jobs" && (
              <JobsList
                data={jobsList}
                userType={USER_TYPES.employer}
                onButtonClick={handleJobApplicantModalOpen}
              />
            )}
            {currentNavKey === "post-job" && <PostJobForm />}
          </Content>
        </Layout>
      </Layout>
      <ViewJobApplicantsModal
        modalOpen={modalOpen}
        handleJobApplicantModalClose={handleJobApplicantModalClose}
      />
    </Spin>
  );
};

export default EmployerPage;
