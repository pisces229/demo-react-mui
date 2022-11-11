import {
  Box,
  Button,
  ClickAwayListener,
  Fade,
  Modal,
  Popover,
  Popper,
  SxProps,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function DemoUtilsApp() {
  return (
    <>
      <h1>Demo Utils App</h1>
      <DemoUtilClickAwayListener />
      <DemoUtilsModal />
      <DemoUtilsPopover />
      <DemoUtilsPopper />
    </>
  );
}

const DemoUtilClickAwayListener = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 10,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative' }}>
          <input type="text" size={10} />
          <button type="button" onClick={handleClick}>@</button>
          {open ? (
            <Box sx={styles}>
              Click me, I will stay visible until you click outside.
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </>
  );
};

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
