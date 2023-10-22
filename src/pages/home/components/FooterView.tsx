import { Button, Grid, Stack, alpha, colors } from "@mui/material";
import { SectionViewContainer } from "../../../views";
import {
  FooterSocialIcon,
  SectionParagraph,
  SectionTitle,
  SizedBox,
} from "../../../components";
import resources from "../../../resources";
import {
  BiLogoPinterestAlt,
  BiLogoLinkedin,
  BiLogoFacebook,
} from "react-icons/bi";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function FooterView() {
  return (
    <SectionViewContainer bgcolor="#0E0B33">
      <Grid rowSpacing={4} container>
        <Grid flex={1} md={6} xs={12} lg={6} sm={12} item>
          <Stack justifyContent="center" alignItems="flex-start">
            <SectionTitle color={(theme) => theme.palette.common.white}>
              Stay Updated
            </SectionTitle>
            <SectionParagraph
              width="80%"
              textAlign="left"
              fontSize="13px"
              color={alpha(colors.grey[200], 0.5)}
            >
              Stay up-to-date with the latest job listings and career tips from
              our newsletter.
            </SectionParagraph>
            <SizedBox height="24px" />
            <Stack
              padding={1}
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              border={(theme) =>
                `1px solid ${alpha(theme.palette.primary.main, 0.45)}`
              }
              borderRadius={1}
            >
              <input
                style={{
                  backgroundColor: "transparent",
                  borderStyle: "none",
                  padding: "5px",
                  flex: 1,
                  outline: "none",
                  color: colors.grey[500],
                }}
                type="email"
                placeholder="Enter Email Address ..."
              />
              <SizedBox width="15px" />
              <Button
                sx={(theme) => ({
                  bgcolor: theme.palette.primary.main,
                  height: "30px",
                  color: theme.palette.common.white,
                  textTransform: "none",
                  fontSize: theme.spacing(1.5),
                  minWidth: "100px",
                })}
              >
                Subscribe
              </Button>
            </Stack>
            <SizedBox height="20px" />
            <Stack width="110px">
              <img className="img" src={resources.logoWhite} alt="whit-logo" />
            </Stack>
            <SizedBox height="20px" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <FooterSocialIcon>
                <AiOutlineTwitter />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <AiOutlineInstagram />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <BiLogoFacebook />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <BiLogoLinkedin />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <BiLogoPinterestAlt />
              </FooterSocialIcon>
            </Stack>
          </Stack>
        </Grid>
        <Grid sm={12} md={6} xs={12} lg={6} item>
          <Stack>
            <Grid columnSpacing={2} rowSpacing={2} container>
              <Grid sm={6} md={5} lg={4} xs={10} item>
                <Stack justifyContent="center" alignItems="flex-start">
                  <SectionTitle
                    fontSize="22px"
                    color={(theme) => theme.palette.common.white}
                  >
                    Jobs
                  </SectionTitle>
                  <Stack marginTop="-10px" spacing={0.5}>
                    {[
                      "IT Development",
                      "Finance",
                      "Healthcare",
                      "Sales & Marketing",
                      "Education",
                      "Design",
                      "Research",
                      "Human Resources",
                      "Freelance",
                      "Jobs For You",
                    ].map((j) => (
                      <SectionParagraph
                        key={j}
                        fontSize="13px"
                        color={colors.grey[500]}
                        textAlign="left"
                      >
                        {j}
                      </SectionParagraph>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid sm={6} xs={12} lg={6} item>
                <Grid rowSpacing={2} columnSpacing={2} container>
                  <Grid sm={6} md={6} lg={5} xs={6} item>
                    <Stack justifyContent="center" alignItems="flex-start">
                      <SectionTitle
                        fontSize="22px"
                        color={(theme) => theme.palette.common.white}
                      >
                        About
                      </SectionTitle>
                      <Stack>
                        {[
                          "About Us",
                          "History",
                          "Our Team",
                          "Testimonials",
                        ].map((about) => (
                          <SectionParagraph
                            key={about}
                            fontSize="13px"
                            color={colors.grey[500]}
                            textAlign="left"
                          >
                            {about}
                          </SectionParagraph>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid sm={6} md={6} lg={5} xs={6} item>
                    <Stack justifyContent="center" alignItems="flex-start">
                      <SectionTitle
                        fontSize="22px"
                        color={(theme) => theme.palette.common.white}
                      >
                        Services
                      </SectionTitle>
                      <Stack>
                        {["For Employee", "For Employer", "Support"].map(
                          (s) => (
                            <SectionParagraph
                              key={s}
                              fontSize="13px"
                              color={colors.grey[500]}
                              textAlign="left"
                            >
                              {s}
                            </SectionParagraph>
                          )
                        )}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid sm={6} md={6} lg={5} xs={6} item>
                    <Stack justifyContent="center" alignItems="flex-start">
                      <SectionTitle
                        fontSize="22px"
                        color={(theme) => theme.palette.common.white}
                      >
                        Blog
                      </SectionTitle>
                      <Stack>
                        {["News", "Tips", "Events"].map((blog) => (
                          <SectionParagraph
                            key={blog}
                            fontSize="13px"
                            color={colors.grey[500]}
                            textAlign="left"
                          >
                            {blog}
                          </SectionParagraph>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid sm={6} md={6} lg={5} xs={6} item>
                    <Stack justifyContent="center" alignItems="flex-start">
                      <SectionTitle
                        fontSize="22px"
                        color={(theme) => theme.palette.common.white}
                      >
                        Contact
                      </SectionTitle>
                      <Stack>
                        {["Phone", "Email", "Social Media"].map((con) => (
                          <SectionParagraph
                            key={con}
                            fontSize="13px"
                            color={colors.grey[500]}
                            textAlign="left"
                          >
                            {con}
                          </SectionParagraph>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </SectionViewContainer>
  );
}
