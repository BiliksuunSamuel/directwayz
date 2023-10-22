import { Grid, Stack, colors } from "@mui/material";
import {
  FeaturedJobCard,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";

export default function FeaturedJobsView() {
  return (
    <Stack
      paddingX={(theme) => theme.spacing(10)}
      alignItems="center"
      justifyContent="flex-start"
      paddingY={(theme) => theme.spacing(6)}
    >
      <SectionTitle>Featured Jobs</SectionTitle>
      <SectionParagraph fontFamily="Poppins">
        Our current top picks for your dream career based on our current popular
        listing.
      </SectionParagraph>
      <SizedBox height="50px" />
      <Stack>
        <Grid
          columnSpacing={2}
          rowSpacing={2}
          justifyContent="center"
          container
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <FeaturedJobCard key={i} />
          ))}
        </Grid>
      </Stack>
      <SizedBox height="80px" />
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <Stack
            key={i}
            width="30px"
            height="8px"
            borderRadius={1}
            bgcolor={(theme) =>
              i === 0 ? theme.palette.primary.main : colors.grey[300]
            }
          />
        ))}
      </Stack>
    </Stack>
  );
}
