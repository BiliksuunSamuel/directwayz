import { IconButton, IconButtonProps } from "@mui/material";

interface IProps extends IconButtonProps {}
export default function FooterSocialIcon({ children, ...others }: IProps) {
  return (
    <IconButton
      sx={(theme) => ({
        width: "22px",
        height: "22px",
        borderRadius: theme.spacing(0.45),
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.common.white,
        color: "#0E0B33",
        "&:hover": {
          bgcolor: theme.palette.common.white,
        },
      })}
      size="small"
      {...others}
    >
      {children}
    </IconButton>
  );
}
