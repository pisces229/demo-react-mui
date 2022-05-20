import {
  Box,
  Button,
  Fade,
  Modal,
  Popover,
  Popper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function DemoUtilsApp() {
  return (
    <>
      <h1>Demo Utils App</h1>
      <DemoUtilsModal />
      <DemoUtilsPopover />
      <DemoUtilsPopper />
    </>
  );
}

const DemoUtilsModal = () => {
  const [value, setValue] = useState<boolean>(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Button onClick={() => setValue(true)}>Open modal</Button>
      <Modal open={value} onClose={() => setValue(false)}>
        <Box sx={style}>
          <Typography>Text in a modal.</Typography>
        </Box>
      </Modal>
    </>
  );
};

const DemoUtilsPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);
  return (
    <>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
};

const DemoUtilsPopper = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  return (
    <>
      <Button onClick={onClick}>Toggle Popper</Button>
      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of the Popper.
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};
