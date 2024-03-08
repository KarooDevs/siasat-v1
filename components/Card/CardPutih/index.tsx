import { Box } from "@mui/material";

const CardPutih = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          borderRadius: 6,
          backgroundColor: "#ffffff",
          color: "#999999",
          my: 5,
          mx: 5,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default CardPutih;
