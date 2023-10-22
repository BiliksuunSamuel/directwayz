import { Route, Routes } from "react-router-dom";
import { HomeContentPage, HomePage } from "../pages/home/views";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<HomeContentPage />} />
      </Route>
    </Routes>
  );
}
