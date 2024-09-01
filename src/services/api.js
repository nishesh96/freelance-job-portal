const mockApiLogin = (username, password, userType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve({
          userInfo: {
            name: "John Doe",
            email: "john.doe@gmail.com",
            skillset: ["javascript", "react"],
            minSalaryPerHour: 5000,
          },
          userType: userType,
          userToken: "fake-token-123",
        });
      } else {
        reject("Error Logging In");
      }
    }, 1000);
  });
};

const fetchFreelancerProfile = async (id) => {
  try {
    const response = await fetch("/freelancers.json");
    if (response.ok) {
      const result = await response.json();
      const user = result.filter((item) => item.id == id);
      return user;
    } else {
      throw new Error("API Failed");
    }
  } catch (err) {
    console.log("Error", err.message);
  }
};

const fetchGitHubProjects = async (githubId) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubId}/repos`
    );
    if (response.ok) {
      let result = await response.json();
      return result;
    } else {
      throw new Error("API Failed");
    }
  } catch (error) {
    console.log("Error fetching GitHub projects:", error);
  }
};
export { mockApiLogin, fetchGitHubProjects, fetchFreelancerProfile };
