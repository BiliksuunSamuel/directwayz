import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function SectionViewContainer({ children, ...others }: IProps) {
  return (
    <Stack
      paddingX={(theme) => theme.spacing(10)}
      alignItems="center"
      justifyContent="flex-start"
      paddingY={(theme) => theme.spacing(6)}
      {...others}
    >
      {children}
    </Stack>
  );
}
