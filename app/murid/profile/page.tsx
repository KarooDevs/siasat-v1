import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import FormDef from "@/components/Form/FormDef";
import { Box, Grid } from "@mui/material";
import React from "react";

function page() {
  return (
    <>
      <CardPutih>
        <Grid container>
          <Grid item xs={12}>
            <CardBiru title={"EDIT PROFIL"} />
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "center" }} xs={12}>
            <Box
              sx={{
                width: "130px",
                height: "150px",
                backgroundColor: "#999999",
                mt: 3,
                color: "black",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              foto
            </Box>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <FormDef
                title={"NISN"}
                value={"22051214088"}
                id={"nisn"}
                // label="Nisn"
              />
              <FormDef
                title={"TTL"}
                value={"12 November 2001"}
                id={"ttl"}
                // label="Nama"
              />
            </Grid>
            <Grid xs={6}>
              <FormDef
                title={"Nama"}
                value={"Beta Nurul Awalin"}
                id={"nama"}
                // label="Nama"
              />
              <FormDef
                title={"Umur"}
                value={"23 Tahun"}
                id={"umur"}
                // label="Nisn"
              />
            </Grid>
            <Grid xs={6}>
              <FormDef
                title={"Kelas"}
                value={"12 IPA 2"}
                id={"kelas"}
                // label="Nisn"
              />
              <FormDef
                title={"Email"}
                value={"betanurulawalin@gmail.com"}
                id={"email"}
                // label="Nama"
              />
            </Grid>
            <Grid xs={6}>
              <FormDef
                title={"Jenis Kelamin"}
                value={"Perempuan"}
                id={"jenisKelamin"}
                // label="Nisn"
              />
              <FormDef
                title={"Password"}
                value={"*******"}
                id={"pass"}
                // label="Nama"
              />
            </Grid>
            <Grid xs={6}>
              <FormDef
                title={"Alamat"}
                value={"Surabaya, Jawa Timur, Indonesia"}
                id={"alamat"}
                // label="Nama"
              />
            </Grid>
          </Grid>
        </Grid>
      </CardPutih>
    </>
  );
}

export default page;
