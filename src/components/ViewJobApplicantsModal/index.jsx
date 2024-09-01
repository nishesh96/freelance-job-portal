import { Modal } from "antd";
import JobApplicantsList from "components/JobApplicantsList";

const data = [
  {
    id: 103,
    firstName: "Alice",
    lastName: "Smith",
    skillset: ["JavaScript", "React", "Node.js"],
    githubUserName: "aliceSmith",
  },
  {
    id: 104,
    firstName: "Bob",
    lastName: "Johnson",
    skillset: ["Python", "Django", "Docker"],
    githubUserName: "bobJohnson",
  },
  {
    id: 105,
    firstName: "Charlie",
    lastName: "Brown",
    skillset: ["Java", "Spring", "MySQL"],
    githubUserName: "charlieBrown",
  },
  {
    id: 106,
    firstName: "Diana",
    lastName: "Miller",
    skillset: ["HTML", "CSS", "JavaScript"],
    githubUserName: "dianaMiller",
  },
  {
    id: 107,
    firstName: "Ethan",
    lastName: "Davis",
    skillset: ["React", "Redux", "TypeScript"],
    githubUserName: "ethanDavis",
  },
  {
    id: 108,
    firstName: "Fiona",
    lastName: "Garcia",
    skillset: ["Node.js", "Express", "MongoDB"],
    githubUserName: "fionaGarcia",
  },
  {
    id: 109,
    firstName: "George",
    lastName: "Wilson",
    skillset: ["Ruby", "Rails", "PostgreSQL"],
    githubUserName: "georgeWilson",
  },
  {
    id: 110,
    firstName: "Hannah",
    lastName: "Taylor",
    skillset: ["PHP", "Laravel", "MySQL"],
    githubUserName: "hannahTaylor",
  },
  {
    id: 111,
    firstName: "Ian",
    lastName: "Martinez",
    skillset: ["C#", ".NET", "Azure"],
    githubUserName: "ianMartinez",
  },
  {
    id: 112,
    firstName: "Julia",
    lastName: "Clark",
    skillset: ["Python", "Flask", "SQLAlchemy"],
    githubUserName: "juliaClark",
  },
];

const ViewJobApplicantsModal = ({
  modalOpen,
  handleJobApplicantModalClose,
  applicantsData = data,
}) => {
  return (
    <Modal
      title="View Applicants"
      open={modalOpen}
      footer={null}
      onCancel={handleJobApplicantModalClose}
      width={600}
    >
      <JobApplicantsList data={applicantsData} />
    </Modal>
  );
};

export default ViewJobApplicantsModal;
