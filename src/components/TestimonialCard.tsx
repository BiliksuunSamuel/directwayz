import { Grid, Stack, Typography, alpha, colors } from "@mui/material";
import { RiDoubleQuotesR } from "react-icons/ri";
import { SizedBox } from ".";
import { IoLocationOutline } from "react-icons/io5";
export default function TestimonialCard() {
  return (
    <Grid item>
      <Stack spacing={1}>
        <Stack
          width="260px"
          minHeight="100px"
          bgcolor={(theme) => theme.palette.common.white}
          borderRadius={2}
          boxShadow={`0px 4px 6px ${alpha(colors.grey[200], 0.5)}`}
          padding={2}
        >
          <Stack color={(theme) => theme.palette.primary.main}>
            <RiDoubleQuotesR fontSize="large" />
          </Stack>
          <Typography
            color={alpha("#0E0B33", 0.5)}
            fontSize="12px"
            textAlign="left"
            fontFamily="Montserrat"
          >
            "I was struggling to find a job that fit my skills and experience,
            but JobLinkup made it easy. I found a great job in my field in just
            a few weeks, and the application process was quick and
            straightforward."
          </Typography>
        </Stack>
        <SizedBox height="5px" />
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Stack
            width="35px"
            height="35px"
            borderRadius="35px"
            bgcolor={colors.grey[300]}
          ></Stack>
          <SizedBox width="8px" />
          <Stack>
            <Typography fontWeight="700" fontSize="12px">
              Michael Lawson
            </Typography>
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <IoLocationOutline fontSize="small" />
              <Typography fontSize="10px">Austin, TX</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
