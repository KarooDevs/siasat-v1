import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

function page() {
  return (
    <>
      <CardPutih>
        <CardBiru title={"MATA PELAJARAN"} />
        <Box sx={{ p: 3, flexGrow: 1, mt: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#297a94" }}>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="left">Mata Pelajaran</TableCell>
                  <TableCell align="left">Deskripsi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardPutih>
    </>
  );
}

export default page;
