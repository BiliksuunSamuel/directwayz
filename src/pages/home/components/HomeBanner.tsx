import {
  Button,
  Stack,
  Typography,
  colors,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GoSearch } from "react-icons/go";
import { CustomAutoComplete, SizedBox } from "../../../components";

export default function HomeBanner() {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Stack
      sx={(theme) => ({
        background:
          "linear-gradient(90deg, rgba(66,134,236,1) 28%, rgba(255,255,255,1) 100%)",
        minHeight: "80vh",
        padding: theme.spacing(4),
        alignItems: smallDevice ? "center" : "flex-start",
        justifyContent: "center",
        paddingX: smallDevice ? theme.spacing(4) : theme.spacing(10),
        color: theme.palette.background.paper,
      })}
      spacing={2}
    >
      <Stack
        justifyContent="center"
        spacing={1.85}
        alignItems="flex-start"
        width={smallDevice ? "100%" : "60%"}
      >
        <Typography fontWeight="bold" fontSize="20px" variant="body1">
          The Ultimate Job Marketplace
        </Typography>
        <Typography
          lineHeight={smallDevice ? "46px" : "92.48px"}
          fontWeight="bold"
          fontSize={smallDevice ? "41px" : "82px"}
          textAlign="left"
        >
          Find Your Next Job with Us
        </Typography>
        <Typography
          fontWeight={400}
          textAlign="left"
          fontSize="20px"
          variant="body1"
        >
          Discover your next career move with JobLinkup, the go-to job
          marketplace for job seekers and employers.
        </Typography>
      </Stack>
      <Stack width={smallDevice ? "100%" : "80%"}>
        <Stack
          sx={(theme) => ({
            bgcolor: theme.palette.common.white,
            borderRadius: theme.spacing(2),
            minHeight: "80px",
            alignItems: "center",
            color: theme.palette.common.black,
            paddingX: theme.spacing(4),
          })}
          direction="row"
          spacing={1}
        >
          <GoSearch color={colors.grey[500]} fontSize={"25px"} />
          {!smallDevice && (
            <>
              <Typography
                fontWeight={200}
                fontSize={smallDevice ? "14px" : "20px"}
                lineHeight={smallDevice ? "15px" : "30px"}
                fontFamily="Montserrat"
                color="#0E0B33"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    fontSize: theme.spacing(1.5),
                  },
                })}
              >
                What job are you looking for?
              </Typography>
              <SizedBox width={smallDevice ? "15px" : "50px"} />
            </>
          )}
          <Stack
            height="40px"
            width="1px"
            alignSelf="center"
            bgcolor={(theme) => theme.palette.action.disabled}
          />
          <SizedBox width={smallDevice ? "15px" : "50px"} />
          <Stack flex={1}>
            <CustomAutoComplete />
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={(theme) => ({
                textTransform: "none",
                fontSize: theme.spacing(2),
                height: "38px",
                borderRadius: theme.spacing(1),
              })}
              disableElevation
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={1}
      >
        <Typography textAlign="left" fontSize="16px" fontWeight={700}>
          Popular Search:
        </Typography>
        <Typography textAlign="left" fontSize="16px" fontWeight={400}>
          Graphic Designer, UI/UX, Web Developer
        </Typography>
      </Stack>
    </Stack>
  );
}
