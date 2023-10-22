import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function ContentContainer({ children, ...others }: IProps) {
  return <Stack {...others}>{children}</Stack>;
}
