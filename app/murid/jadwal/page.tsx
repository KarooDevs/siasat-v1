import CardBiru from "@/components/Card/CardBiru";
import CardPutih from "@/components/Card/CardPutih";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function page() {
  return (
    <>
      <CardPutih>
        {/* Title */}
        <CardBiru title={"JADWAL PELAJARAN"} />
        {/* FORM */}
        <Box sx={{ p: 3, flexGrow: 1, mt: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#297a94" }}>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="left">Senin</TableCell>
                  <TableCell align="left">Selasa</TableCell>
                  <TableCell align="left">Rabu</TableCell>
                  <TableCell align="left">Kamis</TableCell>
                  <TableCell align="left">Jumat</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5.</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left">Mtk</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
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
