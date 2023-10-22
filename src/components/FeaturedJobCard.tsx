import { Button, Grid, Stack, Typography, colors } from "@mui/material";
import { SizedBox } from ".";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdBookmarkBorder } from "react-icons/md";
export default function FeaturedJobCard() {
  return (
    <Grid item>
      <Stack
        bgcolor="#4D54F0"
        width="230px"
        minHeight="200px"
        padding={2}
        borderRadius={1.5}
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={0.5}
        color={(theme) => theme.palette.common.white}
      >
        <Typography fontWeight="700" fontFamily="poppins" fontSize="15px">
          Senior UI Designer
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          spacing={1}
        >
          <Stack
            width="30px"
            height="30px"
            borderRadius={2}
            bgcolor={colors.grey[300]}
          ></Stack>
          <Typography fontSize="12px">Creative Solutions, Inc.</Typography>
        </Stack>
        <SizedBox height="8px" />
        <Stack
          sx={(theme) => ({
            bgcolor: theme.palette.common.white,
            padding: theme.spacing(0.5),
            color: theme.palette.primary.main,
            fontSize: "12px",
            fontWeight: "700",
            borderRadius: theme.spacing(1),
            height: "20px",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
          })}
        >
          Full Time
        </Stack>
        <SizedBox height="8px" />
        <Stack width="100%" paddingX={2}>
          <ul style={{ padding: 0, margin: 0 }}>
            {[
              "Bachelor's degree in design or related",
              "5+ years of experience in UI design",
              "Proficiency in Adobe Creative Suite",
            ].map((requirement, i) => (
              <li
                style={{ fontSize: "12px", textAlign: "left", width: "100%" }}
                key={i}
              >
                {requirement}
              </li>
            ))}
          </ul>
        </Stack>
        <SizedBox height="4px" />
        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <IoLocationOutline fontSize="large" />
          <Typography fontSize="12px">San Fransisco, CA</Typography>
        </Stack>
        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <HiOutlineCurrencyDollar fontSize="large" />
          <Typography fontSize="12px">90,000 - 120,000 per year</Typography>
        </Stack>
        <SizedBox height="8px" />
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Button
            sx={(theme) => ({
              bgcolor: theme.palette.common.white,
              color: theme.palette.primary.main,
              fontWeight: "700",
              textTransform: "none",
              "&:hover": {
                bgcolor: theme.palette.common.white,
                fontWeight: "900",
              },
              width: "100%",
            })}
            variant="contained"
            size="small"
            disableElevation
          >
            Apply This Job
          </Button>
          <Stack
            width="45px"
            height="25px"
            border={(theme) => `1px solid ${theme.palette.common.white}`}
            borderRadius={2}
            padding={0.25}
            alignItems="center"
            justifyContent="center"
          >
            <MdBookmarkBorder />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
