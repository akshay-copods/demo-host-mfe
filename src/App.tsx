import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.scss";
import OnboardingLayout from "./layouts/OnboardingLayout";
import WorkflowLayout from "./layouts/WorkflowLayout";
import SignupLayout from "./layouts/SignupLayout";
import Signup from "./pages/Signup";
//@ts-ignore
const Onboarding = lazy(() => import("onboarding/Onboarding"));
//@ts-ignore
const Word = lazy(() => import("onboarding/Word"));
const App = () => (
  <div className="flex flex-col h-screen">
    <Routes>
      <Route
        path="/"
        element={<SignupLayout header={<Header />} signup={<Signup />} />}
      />
      <Route
        path="/onboarding"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <OnboardingLayout header={<Header />} onboarding={<Onboarding />} />
          </Suspense>
        }
      />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route
        path="/workflow"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <WorkflowLayout />
          </Suspense>
        }
      />
    </Routes>
  </div>

  // <Layout header={<Header />} />
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
