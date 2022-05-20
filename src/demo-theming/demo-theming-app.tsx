import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';

export function DemoThemingApp() {
  const attributes = {
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  };
  return (
    <>
      <p>Autocomplete</p>
      <Autocomplete
        disablePortal
        {...attributes}
        sx={{ width: 300 }}
        // eslint-disable-next-line react/jsx-no-undef
        renderInput={(params) => <TextField {...params} />}
      />
      <p>AutocompleteStyle</p>
      <AutocompleteStyle
        disablePortal
        {...attributes}
        sx={{ width: 300 }}
        // eslint-disable-next-line react/jsx-no-undef
        renderInput={(params) => <TextField {...params} />}
      />
      <p>AutocompleteTheme</p>
      <ThemeProvider theme={AutocompleteTheme}>
        <Autocomplete
          disablePortal
          {...attributes}
          sx={{ width: 300 }}
          // eslint-disable-next-line react/jsx-no-undef
          renderInput={(params) => <TextField {...params} />}
        />
      </ThemeProvider>
    </>
  );
}

// theme
const AutocompleteTheme = createTheme({
  components: {
    MuiAutocomplete: {
      defaultProps: {
        // disabled: true,
      },
      styleOverrides: {
        inputRoot: {
          padding: '0px',
          background: 'lightblue',
        },
        // input: {
        //   background: "lightblue",
        // },
      },
      variants: [],
    },
  },
});
// styled
const AutocompleteStyle = styled(Autocomplete)({
  '.MuiOutlinedInput-root': {
    '&.MuiInputBase-root': {
      '&.MuiInputBase-colorPrimary': {
        '&.MuiInputBase-fullWidth': {
          '&.MuiInputBase-formControl': {
            '&.MuiInputBase-adornedEnd': {
              '&.MuiAutocomplete-inputRoot': {
                padding: '0px',
              },
            },
          },
        },
      },
    },
  },
  '.MuiOutlinedInput-input': {
    '&.MuiInputBase-input': {
      '&.MuiInputBase-inputAdornedEnd': {
        background: 'lightblue',
      },
    },
  },
});
