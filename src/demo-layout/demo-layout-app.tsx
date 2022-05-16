import { Grid, Paper, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';

export function DemoLayoutApp() {
  return (
    <>
      <h1>Demo Layout App</h1>
      <DemoLayoutGrid />
      <DemoLayoutStack />
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
/* <Item>Item 0</Item> */

const DemoLayoutGrid = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </>
  );
}

const DemoLayoutStack = () => {
  return (
    <>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      <br/>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </>
  );
}
