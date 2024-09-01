import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.auth);

  if (!userToken) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized</h1>
        <span>
          <NavLink to="/">Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
};
export default ProtectedRoute;
