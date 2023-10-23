import {
  Button,
  Stack,
  Typography,
  alpha,
  colors,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ContactUsView, FooterView, JobsPageBanner } from "../components";
import {
  RecentJobCard,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";
import { GridContainer, SectionViewContainer } from "../../../views";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

export default function JobDescriptionPage() {
  const smallDevice = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Stack>
      <Stack position="relative" paddingY={4}>
        <JobsPageBanner
          routePrefix="Information Technology"
          title="Front-End Web Developer"
          titleLabel="Posted February 10, 2023"
          paddingY={8}
        />
        <Stack
          width="105px"
          height="100px"
          borderRadius={2}
          bgcolor={(theme) => theme.palette.background.paper}
          zIndex={2}
          boxShadow={`0px 4px 6px ${alpha(colors.grey[200], 0.85)}`}
          position="absolute"
          bottom={-30}
          left="70px"
        />
      </Stack>
      <SizedBox height="0px" />
      <SectionViewContainer paddingY={0} paddingTop={5} alignItems="left">
        <SectionTitle textAlign="left" fontSize="20px">
          UXLabs Company
        </SectionTitle>
        <SizedBox margin={smallDevice ? 0 : "-5px"} />
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Stack
            spacing={0.5}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <IoLocationOutline color={colors.grey[500]} fontSize="large" />
            <Typography color={colors.grey[600]} fontSize="12px">
              San Fransisco, CA
            </Typography>
          </Stack>
          <SizedBox width="15px" />
          <Stack
            spacing={0.5}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <HiOutlineCurrencyDollar
              color={colors.grey[500]}
              fontSize="large"
            />
            <Typography color={colors.grey[600]} fontSize="12px">
              90,000 - 120,000 per year
            </Typography>
          </Stack>
        </Stack>
      </SectionViewContainer>
      <SectionViewContainer paddingY={0} alignItems="left">
        <SectionTitle fontSize="22px" textAlign="left">
          Job Description
        </SectionTitle>
        <SectionParagraph
          width={smallDevice ? "100%" : "65%"}
          textAlign="left"
          fontSize="14px"
        >
          UXLabs Company is seeking an experienced Front-End Web Developer to
          join our team. In this role, you will be responsible for developing
          and implementing user interfaces for web applications using HTML, CSS,
          and JavaScript. You will work closely with the design and development
          teams to create visually appealing and user-friendly web pages that
          meet our clients' needs.
        </SectionParagraph>
        <SizedBox height="5px" />
        <ul style={{ padding: 0, paddingLeft: "20px" }}>
          {[
            " Bachelor's degree in Computer Science, Web Development or related field",
            "3+ years of experience in web development",
            "Strong knowledge of front-end development languages and frameworks, including HTML, CSS, and JavaScript",
            "Experience with responsive design and mobile-first development",
            " Experience with version control systems, such as Git",
            "Understanding of web performance optimization techniques",
            "Strong problem-solving and analytical skills",
            "    Ability to work collaboratively in a team environment",
          ].map((item, i) => (
            <li
              style={{
                textAlign: "left",
                fontSize: "13px",
                color: alpha("#0E0B33", 0.5),
                margin: "5px 0",
              }}
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
        <SectionParagraph></SectionParagraph>
        <SizedBox height="15px" />
        <Button
          sx={(theme) => ({
            bgcolor: theme.palette.primary.main,
            textTransform: "none",
            color: theme.palette.common.white,
            alignSelf: "flex-start",
            width: "180px",
            borderRadius: theme.spacing(1),
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
          })}
        >
          Apply This Job
        </Button>
      </SectionViewContainer>
      <SizedBox mb={5} />
      <SectionViewContainer>
        <SectionTitle fontSize="24px"> Related Jobs</SectionTitle>
        <SizedBox height="10px" />
        <Stack>
          <GridContainer>
            {Array.from({ length: 4 }).map((_, i) => (
              <RecentJobCard key={i} />
            ))}
          </GridContainer>
        </Stack>
      </SectionViewContainer>
      <ContactUsView />
      <FooterView />
    </Stack>
  );
}
