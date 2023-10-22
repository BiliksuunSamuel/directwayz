import { Grid, Link, Stack, useMediaQuery, useTheme } from "@mui/material";
import {
  RecentJobCard,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";
import { SectionViewContainer } from "../../../views";

export default function RecentJobsView() {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <SectionViewContainer>
      <SectionTitle>Most Recent Job in Ghana</SectionTitle>
      <Stack width={smallDevice ? "100%" : "60%"}>
        <SectionParagraph fontFamily="Poppins">
          Find the best paying jobs based on the job category. 100% safe
          recruitment process with transparent progress and real-time
          assessment.
        </SectionParagraph>
      </Stack>
      <SizedBox height="50px" />
      <Stack>
        <Grid
          columnSpacing={2}
          rowSpacing={2.5}
          justifyContent="center"
          container
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <RecentJobCard key={i} />
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
        <Stack
          borderBottom={(theme) => `2px solid ${theme.palette.common.black}`}
          width="130px"
        >
          <Link
            sx={(theme) => ({
              color: theme.palette.common.black,
              lineHeight: "20px",
              textDecoration: "none",
            })}
            fontWeight="700"
            fontSize="15px"
          >
            View All Jobs
          </Link>
        </Stack>
      </Stack>
    </SectionViewContainer>
  );
}
