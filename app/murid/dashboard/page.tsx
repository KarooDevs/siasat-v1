import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { MdBook } from "react-icons/md";

function page() {
  return (
    <>
      {/* welcome */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          p: 5,
          height: "40vh",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/school.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
            width: "100%",
            height: "40vh",
            position: "absolute",
            zIndex: -1,
          }}
        ></div>
        <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
          Selamat Datang, Beta!
        </Typography>
        <Typography variant="subtitle1" component="div">
          Sistem Informasi Akademik Sederhana Terpadu
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 5, color: "#ffffff", backgroundColor: "#297a94" }}
        >
          Contact
        </Button>
      </Box>
      {/* welcome end */}

      {/* Dashboard */}
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
          backgroundColor: "#d9d9d9",
          my: 5,
          mx: 5,
        }}
      >
        <Box
          sx={{
            borderRadius: 6,
            backgroundColor: "#297a94",
            px: 10,
            py: 1,
            width: "80vw",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
            Dashboard SIASAT
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              px: 6,
              py: 3,
              backgroundColor: "#ffffff",
              my: 3,
              mx: 5,
              borderRadius: 6,
            }}
          >
            <MdBook size={48} />
            <Typography variant="h6" color="initial">
              Absensi
            </Typography>
          </Box>
          <Box
            sx={{
              px: 6,
              py: 3,
              backgroundColor: "#ffffff",
              my: 3,
              mx: 5,
              borderRadius: 6,
            }}
          >
            <MdBook size={48} />
            <Typography variant="h6" color="initial">
              Mata Pelajaran
            </Typography>
          </Box>
          <Box
            sx={{
              px: 6,
              py: 3,
              backgroundColor: "#ffffff",
              my: 3,
              mx: 5,
              borderRadius: 6,
            }}
          >
            <MdBook size={48} />
            <Typography variant="h6" color="initial">
              Jadwal Pelajaran
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Dashboard End */}
    </>
  );
}

export default page;
