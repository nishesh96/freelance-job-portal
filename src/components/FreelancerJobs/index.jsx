import { message, Spin, Flex } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import JobsFilter from "components/JobsFilterCard";
import JobsList from "components/JobsList/JobsList";
import { USER_TYPES } from "constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setAppliedJobs } from "state/slices/freelancerSlice";
import AppliedJobsList from "components/AppliedJobsList/JobsList";

const filterJobs = (jobsList, filters, appliedJobIds) => {
  return jobsList.filter((job) => {
    const meetsSalaryRequirement =
      filters.minSalary === "" || job.minSalaryPerHour >= filters.minSalary;
    const meetsSkillsetRequirement =
      filters.requiredSkills.length === 0 ||
      filters.requiredSkills.every((skill) => job.skillset.includes(skill));
    const meetsLocationRequirement =
      filters.location.length === 0 || filters.location.includes(job.location);
    const meetsNotAppliedRequirment =
      appliedJobIds.length === 0 || appliedJobIds.every((id) => job.id !== id);
    return (
      meetsNotAppliedRequirment &&
      meetsSalaryRequirement &&
      meetsSkillsetRequirement &&
      meetsLocationRequirement
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
    console.log("Filter changed:", name, value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredJobs = useMemo(
    () => filterJobs(jobsList, filters, appliedJobIds),
    [jobsList, filters, appliedJobIds],
  );

  return (
    <Spin spinning={loadSpinner}>
      <Flex gap="middle" justify="space-evenly" align="start">
        <JobsFilter handleFilterChange={handleFilterChange} />
        {contextHolder}
        <JobsList
          data={filteredJobs}
          userType={USER_TYPES.freelancer}
          onButtonClick={easyApplyButtonHandler}
        />
        <AppliedJobsList jobsList={jobsList} appliedJobIds={appliedJobIds} />
      </Flex>
    </Spin>
  );
};

export default FreelancerJobs;
