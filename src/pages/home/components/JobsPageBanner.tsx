import { Stack, StackProps, Typography, colors } from "@mui/material";
import { SectionViewContainer } from "../../../views";
import { SectionParagraph, SectionTitle, SizedBox } from "../../../components";

interface IProps extends StackProps {
  title?: string;
  routePrefix?: string;
  titleLabel?: string;
}
export default function JobsPageBanner({
  title,
  titleLabel,
  routePrefix,
  ...others
}: IProps) {
  return (
    <SectionViewContainer
      alignItems="flex-start"
      bgcolor={colors.grey[300]}
      {...others}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={1}
        width="100%"
      >
        {["Home", "/", "Jobs", "/", routePrefix ?? "Browse"].map((path, i) => (
          <Typography fontSize="14px" key={i} color="#4D54F0">
            {path}
          </Typography>
        ))}
      </Stack>
      <SizedBox height="20px" />
      <SectionTitle fontSize="48px" textAlign="left">
        {title ?? " Browse Through Variety of Jobs"}
      </SectionTitle>
      <SizedBox height="2px" />
      {titleLabel && (
        <SectionParagraph textAlign="left">{titleLabel}</SectionParagraph>
      )}
    </SectionViewContainer>
  );
}
