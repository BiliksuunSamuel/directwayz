import { Grid, Stack } from "@mui/material";
import {
  JobCategoryCard,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";

export default function JobCategoriesView() {
  return (
    <Stack
      paddingX={(theme) => theme.spacing(10)}
      alignItems="center"
      justifyContent="flex-start"
      paddingY={(theme) => theme.spacing(6)}
    >
      <SectionTitle>Explore our Job Categories</SectionTitle>
      <SectionParagraph fontFamily="Poppins">
        Get started by looking at our job categories. Hundreds of new jobs
        everyday!
      </SectionParagraph>
      <SizedBox height="50px" />
      <Stack>
        <Grid
          columnSpacing={2}
          rowSpacing={2}
          justifyContent="center"
          container
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <JobCategoryCard key={i} />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
