const USER_TYPES = {
  freelancer: "Freelancer",
  employer: "Employer",
};

const SKILLSET = [
  { value: "ai", label: "AI" },
  { value: "react", label: "ReactJs" },
  { value: "java", label: "Java" },
  { value: "node", label: "NodeJs" },
  { value: "aws", label: "AWS" },
  { value: "sql", label: "SQL" },
  { value: "python", label: "Python" },
];

const LOCATIONS = [
  { value: "bengaluru", label: "AI" },
  { value: "react", label: "ReactJs" },
];


const JOBS_DATA = [
  {
    id: 1,
    role: "Software Engineer",
    companyName: "Intuit",
    skillset: ["javascript", "react"],
    minSalaryPerHour: 40,
  },
  {
    id: 2,
    role: "Product Manager",
    companyName: "Facebook",
    skillset: ["javascript", "react"],
    minSalaryPerHour: 50,
  },
  {
    id: 3,
    role: "Tester",
    companyName: "Amazon",
    skillset: ["javascript", "react"],
    minSalaryPerHour: 60,
  },
  {
    id: 4,
    role: "Analyst",
    companyName: "Netflix",
    skillset: ["javascript", "react"],
    minSalaryPerHour: 70,
  },
];

export { USER_TYPES, SKILLSET, JOBS_DATA };
