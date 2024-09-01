import { Flex, Spin } from "antd";
import FreelancerProfileCard from "components/FreelancerProfileCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFreelancerProfile } from "services/api";

const ApplicantProfile = ({}) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchFreelancerProfile(id).then((data) => {
      if (data && data.length) {
        setUser(data[0]);
      }
    });
  }, [id]);

  if (user)
    return (
      <Flex align="center" justify="center">
        {<FreelancerProfileCard newUser={!user} user={user} />}
      </Flex>
    );
};

export default ApplicantProfile;
