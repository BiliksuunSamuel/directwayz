import {
  Typography,
  TypographyProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IProps extends TypographyProps {}
export default function SectionTitle({ children, ...others }: IProps) {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Typography
      fontSize={smallDevice ? "22px" : "34px"}
      fontWeight="700"
      textAlign="center"
      lineHeight={smallDevice ? "38px" : "74px"}
      {...others}
    >
      {children}
    </Typography>
  );
}
