import { Grid, Stack } from "@mui/material";
import {
  FAQCard,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";
import { SectionViewContainer } from "../../../views";

export default function FAQView() {
  return (
    <SectionViewContainer>
      <SectionTitle>FAQ</SectionTitle>
      <Stack width="60%">
        <SectionParagraph fontFamily="Poppins">
          Frequently asked questions about our services.
        </SectionParagraph>
      </Stack>
      <SizedBox height="50px" />
      <Stack>
        <Grid
          columnSpacing={2}
          rowSpacing={2}
          justifyContent="center"
          container
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <FAQCard key={i} />
          ))}
        </Grid>
      </Stack>
    </SectionViewContainer>
  );
}
