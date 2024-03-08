import { Box, Typography, TextField } from "@mui/material";
import React from "react";

const FormDef = ({
  title,
  // label,
  id,
  value,
}: {
  title: string;
  // label: string;
  id: string;
  value: string;
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 1,
        }}
      >
        <Typography variant="h6" color="initial" sx={{ width: 130 }}>
          {title}
        </Typography>
        <TextField
          id={id}
          // label={label}
          defaultValue={value}
          sx={{ width: 300, ml: 2 }}
          InputProps={{ readOnly: true }}
          size="small"
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default FormDef;
