import {
  Button,
  Card,
  Col,
  List,
  message,
  Radio,
  Row,
  Space,
  Spin,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import JobsFilter from "components/JobsFilterCard";
import JobsList from "components/JobsList/JobsList";
import { USER_TYPES } from "constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setAppliedJobs } from "state/slices/freelancerSlice";

const filterJobs = (jobsList, filters, appliedJobIds) => {
  return jobsList.filter((job) => {
    const meetsSalaryRequirement =
      filters.minSalary === "" || job.minSalaryPerHour >= filters.minSalary;
    const meetsSkillsetRequirement =
      filters.requiredSkills.length === 0 ||
      filters.requiredSkills.every((skill) => job.skillset.includes(skill));
    // const meetsLocationRequirement =
    //   filters.location.length === 0 ||
    //   filters.location.every((skill) => job.location.includes(skill));
    const meetsNotAppliedRequirment =
      appliedJobIds.length === 0 || appliedJobIds.every((id) => job.id !== id);
    return (
      meetsSalaryRequirement &&
      meetsSkillsetRequirement &&
      meetsNotAppliedRequirment
      // meetsLocationRequirement
    );
  });
};

const FreelancerJobs = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [loadSpinner, setLoadSpinner] = useState(false);

  const { jobsList, appliedJobIds } = useSelector((state) => ({
    jobsList: state.freelancer.jobsList,
    isLoading: state.freelancer.isLoading,
    appliedJobIds: state.freelancer.appliedJobIds,
  }));

  const [filters, setFilters] = useState({
    minSalary: "",
    requiredSkills: [],
    location: [],
  });

  const easyApplyButtonHandler = (id) => {
    setLoadSpinner(true);
    setTimeout(() => {
      dispatch(setAppliedJobs(id));
      setLoadSpinner(false);
      messageApi.success({
        type: "success",
        content: "Applied",
      });
    }, 300);
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredJobs = useMemo(
    () => filterJobs(jobsList, filters, appliedJobIds),
    [jobsList, filters, appliedJobIds]
  );

  return (
    <Spin spinning={loadSpinner}>
      <Row>
        <Col span={4}>
          <JobsFilter handleFilterChange={handleFilterChange} />
        </Col>
        <Col span={12}>
          {contextHolder}
          <JobsList
            data={filteredJobs}
            userType={USER_TYPES.freelancer}
            onButtonClick={easyApplyButtonHandler}
          />
        </Col>
      </Row>
    </Spin>
  );
};

export default FreelancerJobs;
