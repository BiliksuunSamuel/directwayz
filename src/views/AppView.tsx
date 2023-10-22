import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function AppView({ children, ...others }: IProps) {
  return (
    <Stack
      bgcolor={(theme) => theme.palette.common.white}
      color={(theme) => theme.palette.common.black}
      {...others}
    >
      {children}
    </Stack>
  );
}
