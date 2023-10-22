import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";

import { PiPlusBold } from "react-icons/pi";
import { SectionParagraph } from ".";
// import {GrFormClose} from 'react-icons/gr'

export default function FAQCard() {
  return (
    <Grid item sm={10} md={6} lg={4} xs={12}>
      <Stack
        border={(theme) =>
          `1px solid ${alpha(theme.palette.primary.main, 0.45)}`
        }
        borderRadius={1}
      >
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={
              <Stack color={(theme) => theme.palette.primary.main}>
                <PiPlusBold fontSize="20px" />
              </Stack>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            onChange={(s) => alert(s)}
          >
            <Typography fontWeight="700" fontSize="16px">
              How do I search for jobs on DirectWayz?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SectionParagraph fontSize="12px" textAlign="left">
              To search for jobs on JobLinkup, simply navigate to the homepage
              and enter your search criteria in the search bar at the top of the
              page. You can enter keywords related to the type of job you're
              looking for, as well as location and other filters such as job
              type or salary range. After that, click the Search button to begin
              your job hunting journey.
            </SectionParagraph>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Grid>
  );
}
