import { useState, useEffect } from "react";

const useGithubProjects = (username) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok > 0) {
          throw new Error("Failed to fetch GitHub projects");
        }
        const data = await response.json();
        if (!data.length) {
          throw new Error(
            `No Projects found on GitHub. Kindly add projects or check username`
          );
        }
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
};

export default useGithubProjects;
