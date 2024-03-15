import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  // if (typeof window !== "undefined") {
  //   window.location.href = "/murid/dashboard/";
  // }

  // return null;
  return (
    <main>
      <Grid container justifyContent="center" sx={{ height: "100%" }}>
        <Grid item flexDirection={"column"} xs={8}>
          <Grid item xs={12} sx={{ marginY: 5 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#297a94",
                backgroundImage: "linear-gradient(to right, #a7dff2, #297a94)",
                color: "white",
                width: 500,
                height: 120,
                padding: 2,
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -25,
                  left: -30,
                  backgroundColor: "#297a94",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  src="/logo_siasat.png"
                  alt="logo"
                  sx={{ width: 200, height: 200 }}
                />
              </Box>
              <Grid
                sx={{
                  marginLeft: 15,
                }}
              >
                <Grid
                  item
                  flexDirection={"row"}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    SIASAT
                  </Typography>
                </Grid>
                <Grid item flexDirection={"row"} xs={12}>
                  <Typography
                    variant="h6"
                    fontWeight="light"
                    textAlign="center"
                  >
                    Sistem Informasi Akademik <br /> Sederhana Terpadu
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" color="black" fontWeight="bold">
              SIASAT <br />
              SISTEM INFORMASI <br />
              AKADEMIK SEDERHANA <br />
              TERPADU
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 5 }}>
            <Button
              variant="contained"
              sx={{ paddingY: 1, paddingX: 2 }}
              href="/murid/dashboard"
            >
              Login SIASAT
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          flexDirection={"column"}
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          height={"100%"}
        >
          <Image
            src="/G.png"
            width={400}
            height={400}
            alt="logo"
            style={{ bottom: 0 }}
          />
        </Grid>
      </Grid>
    </main>
  );
}
