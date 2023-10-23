import { IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import resources from "../resources";
import { NavbarRoutes } from "../routes";
import { NavbarLink } from "../components";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarView() {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Stack
      paddingY={(theme) => theme.spacing(3)}
      paddingX={(theme) => theme.spacing(10)}
      position="sticky"
      top={0}
      bgcolor={(theme) => theme.palette.background.paper}
      zIndex={100}
    >
      <Stack spacing={10} direction="row" width="100%" alignItems="center">
        <Stack width="120px">
          <img className="img" src={resources.logo} alt="app-logo" />
        </Stack>
        {!smallDevice && (
          <Stack>
            <Stack spacing={5} direction="row">
              {NavbarRoutes.map((route) => (
                <NavbarLink key={route.title} route={route} />
              ))}
            </Stack>
          </Stack>
        )}
        {smallDevice && (
          <>
            <Stack flex={1} />
            <Stack alignSelf="flex-end">
              <IconButton>
                <AiOutlineMenu />
              </IconButton>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}
