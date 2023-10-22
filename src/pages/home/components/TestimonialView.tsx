import { Grid, Stack, Typography, alpha, colors } from "@mui/material";
import {
  SectionParagraph,
  SizedBox,
  TestimonialCard,
} from "../../../components";
import { SectionViewContainer } from "../../../views";

export default function TestimonialView() {
  return (
    <SectionViewContainer bgcolor={alpha(colors.grey[200], 0.75)}>
      <Typography
        fontSize="34px"
        fontWeight="700"
        textAlign="center"
        lineHeight="74px"
      >
        Testimonial
      </Typography>
      <SectionParagraph fontFamily="Poppins">
        What people are saying about working with us.
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
            <TestimonialCard key={i} />
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
            height="7px"
            borderRadius={1}
            bgcolor={(theme) =>
              i === 0 ? theme.palette.primary.main : colors.grey[300]
            }
          />
        ))}
      </Stack>
    </SectionViewContainer>
  );
}
