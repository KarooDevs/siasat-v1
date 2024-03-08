import { Box, Typography } from "@mui/material";

const CardBiru = ({ title }: { title: string }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#297a94",
          color: "white",
          p: 3,
          borderRadius: 3,
          maxWidth: 250,
          height: 70,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="white" fontWeight="bold">
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default CardBiru;
