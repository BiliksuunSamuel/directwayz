import { Route, Routes } from "react-router-dom";
import {
  HomeContentPage,
  HomePage,
  JobDescriptionPage,
  JobsPage,
} from "../pages/home/views";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<HomeContentPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/:id" element={<JobDescriptionPage />} />
      </Route>
    </Routes>
  );
}
