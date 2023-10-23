import { Stack } from "@mui/material";
import { JobsPageBanner } from "../components";
import { GridContainer, SectionViewContainer } from "../../../views";
import { RecentJobCard } from "../../../components";

export default function JobsPage() {
  return (
    <Stack>
      <JobsPageBanner />
      <SectionViewContainer>
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Stack></Stack>
          <Stack flex={2.5}>
            <GridContainer>
              {Array.from({ length: 20 }).map((_, i) => (
                <RecentJobCard key={i} />
              ))}
            </GridContainer>
          </Stack>
        </Stack>
      </SectionViewContainer>
    </Stack>
  );
}
