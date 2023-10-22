import { Stack } from "@mui/material";
import { NavbarView } from "../../../shared";
import { Outlet } from "react-router-dom";
export default function HomePage() {
  return (
    <Stack>
      <NavbarView />
      <Stack width="100%">
        <Outlet />
      </Stack>
    </Stack>
  );
}
