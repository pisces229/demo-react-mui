import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";

// Autocomplete styled
const DemoStyleAutocomplete = styled(Autocomplete)({
  ".MuiOutlinedInput-root": {
    "&.MuiInputBase-root": {
      "&.MuiInputBase-colorPrimary": {
        "&.MuiInputBase-fullWidth": {
          "&.MuiInputBase-formControl": {
            "&.MuiInputBase-adornedEnd": {
              "&.MuiAutocomplete-inputRoot": {
                padding: "0px",
              },
            },
          },
        },
      },
    },
  },
  ".MuiOutlinedInput-input": {
    "&.MuiInputBase-input": {
      "&.MuiInputBase-inputAdornedEnd": {
        background: "lightblue",
      },
    },
  },
});

export function DemoStyleApp() {
  const attributes = {
    options: [
      { value: "001", text: "The Godfather" },
      { value: "002", text: "Pulp Fiction" },
    ],
  };
  return (
    <>
      <DemoStyleAutocomplete
        disablePortal
        {...attributes}
        sx={{ width: 300 }}
        // eslint-disable-next-line react/jsx-no-undef
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
}
