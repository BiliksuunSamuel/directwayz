import { Typography, TypographyProps, alpha } from "@mui/material";

interface IProps extends TypographyProps {}
export default function SectionParagraph({ children, ...others }: IProps) {
  return (
    <Typography
      fontFamily="Poppins"
      fontSize="16px"
      textAlign="center"
      fontWeight="200"
      color={alpha("#0E0B33", 0.5)}
      {...others}
    >
      {children}
    </Typography>
  );
}
