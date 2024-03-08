import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
      <CardPutih>
        <Box sx={{ p: 3, flexGrow: 1, mt: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#297a94" }}>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="left">MAPEL</TableCell>
                  <TableCell align="left">UH 1</TableCell>
                  <TableCell align="left">Uh 2</TableCell>
                  <TableCell align="left">UTS</TableCell>
                  <TableCell align="left">UAS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">30</TableCell>
                  <TableCell align="left">40</TableCell>
                  <TableCell align="left">50</TableCell>
                  <TableCell align="left">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">30</TableCell>
                  <TableCell align="left">40</TableCell>
                  <TableCell align="left">50</TableCell>
                  <TableCell align="left">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">30</TableCell>
                  <TableCell align="left">40</TableCell>
                  <TableCell align="left">50</TableCell>
                  <TableCell align="left">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">30</TableCell>
                  <TableCell align="left">40</TableCell>
                  <TableCell align="left">50</TableCell>
                  <TableCell align="left">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">30</TableCell>
                  <TableCell align="left">40</TableCell>
                  <TableCell align="left">50</TableCell>
                  <TableCell align="left">60</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardPutih>
    </div>
  );
}

export default page;
