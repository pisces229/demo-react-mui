/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Alert,
  AlertTitle,
  Button,
  Backdrop,
  CircularProgress,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Skeleton,
  Snackbar,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export function DemoFeedbackApp() {
  return (
    <>
      <h1>Demo Feedback App</h1>
      {/* <DemoAlert /> */}
      {/* <DemoBackdrop /> */}
      {/* <DemoProgress /> */}
      {/* <DemoDialog /> */}
      {/* <DemoSkeleton /> */}
      <DemoSnackbar />
    </>
  );
}

const DemoAlert = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <>
      {value && (
        <Alert
          severity="error"
          onClose={() => {
            setValue(false);
          }}
        >
          This is an error alert — check it out!
        </Alert>
      )}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </>
  );
};

const DemoBackdrop = () => {
  const [value, setValue] = React.useState(false);
  return (
    <>
      <Button onClick={() => setValue(true)}>Open</Button>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 1,
        }}
        open={value}
        onClick={() => setValue(false)}
      >
        <h1>Demo Backdrop</h1>
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </>
  );
};

const DemoProgress = () => {
  return (
    <>
      <CircularProgress />
      <LinearProgress />
    </>
  );
};

const DemoDialog = () => {
  const [value, setValue] = React.useState(true);
  return (
    <>
      <Dialog open={value} onClose={() => setValue(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>Dialog Content Text.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setValue(false)}>Disagree</Button>
          <Button onClick={() => setValue(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const DemoSkeleton = () => {
  const [value, setValue] = React.useState(false);
  return <>{value ? <h3>Complete</h3> : <Skeleton variant="text" />}</>;
};

const DemoSnackbar = () => {
  const [value, setValue] = React.useState(false);
  return (
    <>
      <Button onClick={() => setValue(true)}>Open</Button>
      <Snackbar
        open={value}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setValue(false)}
        message="Snackbar !"
      />
    </>
  );
};
