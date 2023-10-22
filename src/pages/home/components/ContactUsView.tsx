import {
  Button,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionViewContainer } from "../../../views";
import { SizedBox } from "../../../components";

export default function ContactUsView() {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <SectionViewContainer paddingX={smallDevice ? 5 : 10}>
      <Stack
        minHeight="300px"
        borderRadius={6}
        bgcolor={(theme) => alpha(theme.palette.primary.main, 0.095)}
        width="100%"
        paddingY={5}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          fontWeight="700"
          fontSize={smallDevice ? "22px" : "34px"}
          width="60%"
          lineHeight={smallDevice ? "25px" : "37px"}
        >
          Join DirectWayz today and take the first step towards finding your
          dream job!
        </Typography>
        <SizedBox height="20px" />
        <Typography fontSize="12px" color={alpha("#0E0B33", 0.75)} width="60%">
          With our user-friendly platform and up-to-date job listings, you'll be
          on your way to a fulfilling career in no time. Sign up now and see
          what opportunities await!
        </Typography>
        <SizedBox height="15px" />
        <Button
          sx={(theme) => ({
            bgcolor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textTransform: "none",
            borderRadius: theme.spacing(1),
            minWidth: "100px",
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
            },
          })}
        >
          Contact Us
        </Button>
      </Stack>
    </SectionViewContainer>
  );
}
