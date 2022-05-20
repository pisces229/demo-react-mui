import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useState } from 'react';

export function DemoNavigationApp() {
  return (
    <>
      <h1>Demo Navigation App</h1>
      <DemoNavigationDrawer />
      <DemoNavigationPagination />
      <DemoNavigationTabs />
    </>
  );
}

const DemoNavigationDrawer = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <>
      <Toolbar>
        <IconButton onClick={() => setValue(true)}>
          <MenuIcon />
        </IconButton>
        <Typography>Open Drawer</Typography>
      </Toolbar>
      <Drawer anchor={'left'} open={value} onClose={() => setValue(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setValue(false)}
          onKeyDown={() => setValue(false)}
        >
          <List>
            {['First', 'Second', 'Third'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['First', 'Second', 'Third'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const DemoNavigationPagination = () => {
  const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(event);
    console.log(page);
  };
  return (
    <>
      <Pagination count={10} onChange={onChange} />
    </>
  );
};

const DemoNavigationTabs = () => {
  const [value, setValue] = useState<number>(0);
  const onChange = (event: React.SyntheticEvent, value: number) =>
    setValue(value);
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={onChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      {value === 0 && <p>Item One</p>}
      {value === 1 && <p>Item Two</p>}
      {value === 2 && <p>Item Three</p>}
    </>
  );
};
