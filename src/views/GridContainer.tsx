import { Grid, GridProps } from "@mui/material";

interface IProps extends GridProps {}
export default function GridContainer({ children, ...others }: IProps) {
  return (
    <Grid
      justifyContent="center"
      container
      rowSpacing={2}
      columnSpacing={2}
      {...others}
    >
      {children}
    </Grid>
  );
}
