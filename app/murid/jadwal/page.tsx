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
              <TableHead sx={{ backgroundColor: "#2a7" }}>
                <TableRow>
                  <TableCell>p</TableCell>
                  <TableCell align="right">p</TableCell>
                  <TableCell align="right">p</TableCell>
                  <TableCell align="right">p</TableCell>
                  <TableCell align="right">p</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>p</TableCell>
                <TableCell align="right">p</TableCell>
                <TableCell align="right">p</TableCell>
                <TableCell align="right">p</TableCell>
                <TableCell align="right">p</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardPutih>
    </>
  );
}

export default page;
