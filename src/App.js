import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import EmployerPage from "./pages/EmployerPage";
import ProtectedRoute from "routes/ProtectedRoutes";
import { Suspense } from "react";
import FreelancerPage from "pages/FreelancerPage";
import { lazyLoadRoutes } from "routes/LazyLoadRoutes";

const FreelancerPageLazy = lazyLoadRoutes("FreelancerPage");
const EmployerPageLazy = lazyLoadRoutes("EmployerPage");
const ApplicantProfileLazy = lazyLoadRoutes("ApplicantProfilePage");

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/freelancer" element={FreelancerPageLazy} />
        <Route path="/employer" element={EmployerPageLazy} />
        <Route path="/employer/applicant/:id" element={ApplicantProfileLazy} />
      </Route>
    </Routes>
  );
}
export default App;
