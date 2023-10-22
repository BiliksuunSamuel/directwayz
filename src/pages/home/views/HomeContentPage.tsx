import { Stack } from "@mui/material";
import {
  ContactUsView,
  FAQView,
  FeaturedJobsView,
  FooterView,
  HomeBanner,
  JobsCategoryView,
  RecentJobsView,
  TestimonialView,
} from "../components";

export default function HomeContentPage() {
  return (
    <Stack>
      <HomeBanner />
      <JobsCategoryView />
      <FeaturedJobsView />
      <RecentJobsView />
      <TestimonialView />
      <ContactUsView />
      <FAQView />
      <FooterView />
    </Stack>
  );
}
