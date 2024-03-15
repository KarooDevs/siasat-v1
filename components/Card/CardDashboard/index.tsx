import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const CardDashboard = ({
  icon,
  title,
  href,
}: {
  icon: ReactNode;
  title: string;
  href: string;
}) => {
  return (
    <>
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <Box
          sx={{
            px: 6,
            py: 3,
            backgroundColor: "#ffffff",
            my: 3,
            mx: 5,
            borderRadius: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            width: 200,
            height: 180,
          }}
        >
          {icon}
          <Typography variant="h6" color="black" fontWeight="bold">
            {title}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default CardDashboard;
