import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        container
        sx={{
          width: 800,
          height: 500,
          backgroundColor: "#d9d9d9",
          mt: 8,

          borderRadius: 3,
        }}
      >
        <Grid item direction="column" xs={5}>
          <Box
            sx={{
              backgroundColor: "#297a94 ",
              height: 500,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid>
              <Grid item>
                <Image
                  src="/logo_siasat.png"
                  alt="logo"
                  width={280}
                  height={280}
                />
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <Typography variant="h4" color="white" fontWeight="bold">
                  SIASAT
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="light"
                  sx={{ fontSize: 15 }}
                >
                  Sistem Informasi Akademik <br /> Sederhana Terpadu
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          direction="column"
          xs={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            p: 3,
          }}
        >
          <Grid item>
            <Typography variant="h4" color="black" fontWeight="bold">
              Login
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="black"
              fontWeight="light"
              sx={{ fontSize: 15 }}
            >
              SIASAT - Sistem Informasi Akademik Sederhana Terpadu
            </Typography>
          </Grid>
          <Grid item sx={{ mt: 4 }}>
            <TextField
              id="usernameInput"
              label="username"
              variant="outlined"
              size="small"
              // value={}
              // onChange={}
              sx={{ width: 380 }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="passwordInput"
              label="password"
              variant="outlined"
              size="small"
              // value={}
              // onChange={}
              sx={{ width: 380, mt: 2 }}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              ml: 2,
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="murid"
                control={<Radio />}
                label="Murid"
                sx={{ mx: 2 }}
              />
              <FormControlLabel
                value="guru"
                control={<Radio />}
                label="Guru"
                sx={{ mx: 2 }}
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
                sx={{ mx: 2 }}
              />
            </RadioGroup>
          </Grid>
          <Grid item sx={{ mt: 3, ml: 17 }}>
            <Button
              variant="contained"
              sx={{ width: 120 }}
              href="/murid/dashboard"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;
