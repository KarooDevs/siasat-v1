import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function page() {
  return (
    <div>
      <Box sx={{ mx: 5, my: 5 }}>
        <CardBiru title={"NILAI"} />
      </Box>
      <Box
        sx={{
          p: 5,
          borderRadius: 6,
          backgroundColor: "#297a94",
          color: "white",
          my: 5,
          mx: 5,
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          spacing={1}
          sx={{ color: "white" }}
        >
          <Grid item flexDirection={"column"} xs={2}>
            <Typography variant="h6" color="white">
              NISN
            </Typography>
            <Typography variant="h6" color="white">
              Nama Siswa
            </Typography>
            <Typography variant="h6" color="white">
              Kelas
            </Typography>
          </Grid>
          <Grid item flexDirection={"column"} xs={4}>
            <Typography variant="h6" color="white">
              : 22051214088
            </Typography>
            <Typography variant="h6" color="white">
              : Beta Nurul Awalin
            </Typography>
            <Typography variant="h6" color="white">
              : 12 IPA 2
            </Typography>
          </Grid>
          <Grid item flexDirection={"column"} xs={3}>
            <Typography variant="h6" color="white">
              Tahun Ajaran
            </Typography>
            <Typography variant="h6" color="white">
              Semester
            </Typography>
            <Typography variant="h6" color="white">
              Wali Kelas
            </Typography>
          </Grid>
          <Grid item flexDirection={"column"} xs={3}>
            <Typography variant="h6" color="white">
              : 2023/2024
            </Typography>
            <Typography variant="h6" color="white">
              : Ganjil
            </Typography>
            <Typography variant="h6" color="white">
              : Nurdila
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <CardPutih>nilai</CardPutih>
    </div>
  );
}

export default page;
