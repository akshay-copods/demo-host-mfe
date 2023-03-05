import React, { lazy } from "react";
import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.scss";
import SignupLayout from "./layouts/SignupLayout";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import RestrictRoute from "./routes/RestrictRoute";
//@ts-ignore
const Onboarding = lazy(() => import('onboarding/Onboarding'));
//@ts-ignore
// const Word = lazy(() => import('onboarding/Word'));
const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="flex flex-col h-screen">
      <Routes>
        <Route element={<RestrictRoute />}>

          <Route path="/" element={<SignupLayout header={<Header />} signup={<Signup />} />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<h1 className="h-full flex justify-center items-center text-lg">Onboarding MFE will come here...</h1>} path='/on-boarding' />
          {/* <Route path="/on-boarding" element={<Suspense fallback={<h1>Loading...</h1>}><OnboardingLayout header={<Header />} onboarding={<Onboarding />} /></Suspense>} /> */}
          <Route path="contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </div>
  </QueryClientProvider>
  // <Layout header={<Header />} />
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("app"));
