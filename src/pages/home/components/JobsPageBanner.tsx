import { Stack, Typography, colors } from "@mui/material";
import { SectionViewContainer } from "../../../views";
import { SectionTitle, SizedBox } from "../../../components";

export default function JobsPageBanner() {
  return (
    <SectionViewContainer alignItems="flex-start" bgcolor={colors.grey[300]}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={1}
        width="100%"
      >
        {["Home", "/", "Jobs", "/", "Browse"].map((path, i) => (
          <Typography fontSize="14px" key={i} color="#4D54F0">
            {path}
          </Typography>
        ))}
      </Stack>
      <SizedBox height="20px" />
      <SectionTitle textAlign="left">
        Browse Through Variety of Jobs
      </SectionTitle>
    </SectionViewContainer>
  );
}
