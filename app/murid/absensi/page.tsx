import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function page() {
  return (
    <>
      <CardPutih>
        <CardBiru title={"ABSENSI"} />
        {/* Form */}
        <Box sx={{ p: 3, mt: 5, flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            direction={"row"}
            justifyContent={"center"}
          >
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "center", my: 1 }}
            >
              {/* <Typography variant="h6" color="black">
                Nama
              </Typography> */}
              <TextField
                variant="filled"
                id="nama"
                label="NAMA"
                defaultValue={"Beta Nurul Awalin"}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "center", my: 1 }}
            >
              {/* <Typography variant="h6" color="black">
                Nama
              </Typography> */}
              <TextField
                variant="filled"
                id="nisn"
                label="NISN"
                defaultValue={"22051214088"}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "center", my: 1 }}
            >
              {/* <Typography variant="h6" color="black">
                Nama
              </Typography> */}
              <TextField
                variant="filled"
                id="kelas"
                label="KELAS"
                defaultValue={"12 IPA 2"}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "center", my: 1 }}
            >
              {/* <Typography variant="h6" color="black">
                Nama
              </Typography> */}
              <TextField
                variant="filled"
                id="status"
                label="STATUS"
                defaultValue={"IZIN"}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </CardPutih>
    </>
  );
}

export default page;
