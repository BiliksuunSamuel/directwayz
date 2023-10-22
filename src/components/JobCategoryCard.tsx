import { Grid, Stack, Typography } from "@mui/material";

export default function JobCategoryCard() {
  return (
    <Grid item>
      <Stack
        minWidth="250px"
        minHeight="240px"
        borderRadius="30px"
        sx={() => ({
          background:
            "linear-gradient(180deg, rgba(14,11,51,0.31976540616246496) 0%, rgba(0,0,0,0.43461134453781514) 100%)",
        })}
      >
        <Stack flex={1} />
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          paddingX={2}
          paddingY={2}
        >
          <Typography color="#FFFFFF" fontSize="22px">
            Mechanician
          </Typography>
          <Typography
            fontSize="14px"
            color="#FFFFFF"
            fontFamily="poppins"
            fontWeight="400"
            lineHeight="10px"
          >
            2,988 open jobs
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
