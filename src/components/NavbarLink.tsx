import { Link, LinkProps } from "@mui/material";
import { INavbarRoute } from "../interface";
import { useLocation } from "react-router-dom";

interface IProps extends LinkProps {
  route: INavbarRoute;
}
export default function NavbarLink({ route, ...others }: IProps) {
  const location = useLocation();
  return (
    <Link
      sx={(theme) => ({
        textDecoration: "none",
        color: theme.palette.common.black,
        fontWeight: location.pathname === route.route ? "bold" : 300,
        borderBottom:
          location.pathname === route.route
            ? `4px solid ${theme.palette.primary.main}`
            : undefined,
        paddingY: theme.spacing(2),
        minWidth: "80px",
      })}
      key={route.title}
      {...others}
    >
      {route.title}
    </Link>
  );
}
