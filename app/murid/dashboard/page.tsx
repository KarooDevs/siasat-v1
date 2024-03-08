import CardDashboard from "@/components/Card/CardDashboard";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
            transition: "transform 0.3s ease",
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
        <Grid
          container
          spacing={1}
          sx={{
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardDashboard
            icon={<MdBook size={48} color="#297a94" />}
            title="Absensi"
            href={"/murid/absensi"}
          />

          <CardDashboard
            icon={<MdBook size={48} color="#297a94" />}
            title="Mata Pelajaran"
            href={"/murid/mapel"}
          />

          <CardDashboard
            icon={<MdBook size={48} color="#297a94" />}
            title="Jadwal Pelajaran"
            href={"/murid/jadwal"}
          />

          <CardDashboard
            icon={<MdBook size={48} color="#297a94" />}
            title="Nilai Siswa"
            href={"/murid/nilai"}
          />

          <CardDashboard
            icon={<MdBook size={48} color="#297a94" />}
            title="Rapor Siswa"
            href={"/murid/rapor"}
          />
        </Grid>
      </Box>
      {/* Dashboard End */}
    </>
  );
}

export default page;
