import { Stack, Typography, alpha, colors } from "@mui/material";
import { SectionTitle } from "../../../components";
import { JobLocations, JobSummary, JobTypes } from "../../../data";
import { GoDot, GoDotFill } from "react-icons/go";
import { PrimaryShades } from "../../../colors";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

export default function JobsFilterView() {
  return (
    <Stack alignSelf="top">
      <SectionTitle textAlign="left" fontSize="20px">
        Date Posted
      </SectionTitle>
      <Stack spacing={0.85}>
        {JobSummary.map((summary, i) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            key={summary.title}
            spacing={1}
          >
            {i === JobSummary.length - 1 ? (
              <GoDotFill color={alpha(PrimaryShades[500], 0.9)} />
            ) : (
              <GoDot fontSize="large" color={alpha(PrimaryShades[500], 0.75)} />
            )}
            <Typography
              fontFamily="Montserrat"
              fontSize={"14px"}
              color={alpha("#0E0B33", 0.5)}
            >
              {summary.title}
            </Typography>
            <Stack flex={1} />
            <Typography
              fontFamily="Montserrat"
              color={colors.grey[400]}
              fontSize="14px"
            >{`(${summary.count})`}</Typography>
          </Stack>
        ))}
      </Stack>

      <SectionTitle textAlign="left" fontSize="20px">
        Job Type
      </SectionTitle>
      <Stack spacing={0.85}>
        {JobTypes.map((summary, i) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            key={summary.title}
            spacing={1}
          >
            {i === 0 ? (
              <BiSolidCheckboxChecked color={PrimaryShades[500]} />
            ) : (
              <BiCheckbox
                fontSize="large"
                color={alpha(PrimaryShades[500], 0.75)}
              />
            )}
            <Typography
              fontFamily="Montserrat"
              fontSize={"14px"}
              color={alpha("#0E0B33", 0.5)}
            >
              {summary.title}
            </Typography>
            <Stack flex={1} />
            <Typography
              fontFamily="Montserrat"
              color={colors.grey[400]}
              fontSize="14px"
            >{`(${summary.count})`}</Typography>
          </Stack>
        ))}
      </Stack>

      <SectionTitle textAlign="left" fontSize="20px">
        Location
      </SectionTitle>
      <Stack spacing={0.85}>
        {JobLocations.map((summary, i) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            key={summary.title}
            spacing={1}
          >
            {i === 0 ? (
              <BiSolidCheckboxChecked color={PrimaryShades[500]} />
            ) : (
              <BiCheckbox
                fontSize="large"
                color={alpha(PrimaryShades[500], 0.75)}
              />
            )}
            <Typography
              fontFamily="Montserrat"
              fontSize={"14px"}
              color={alpha("#0E0B33", 0.5)}
            >
              {summary.title}
            </Typography>
            <Stack flex={1} />
            <Typography
              fontFamily="Montserrat"
              color={colors.grey[400]}
              fontSize="14px"
            >{`(${summary.count})`}</Typography>
          </Stack>
        ))}
        <Typography
          fontFamily="Montserrat"
          color={alpha(PrimaryShades[500], 0.85)}
          fontSize="14px"
          textAlign="left"
        >{`+15 more`}</Typography>
      </Stack>
    </Stack>
  );
}
