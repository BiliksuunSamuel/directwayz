import { Route, Routes } from "react-router-dom";
import { HomeContentPage, HomePage, JobsPage } from "../pages/home/views";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<HomeContentPage />} />
        <Route path="jobs" element={<JobsPage />} />
      </Route>
    </Routes>
  );
}
