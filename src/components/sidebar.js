import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: '#263238',
          color: 'white',
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding component={RouterLink} to="/warehouse" sx={{ color: 'white' }}>
          <ListItemButton>
            <ListItemIcon>
              <HouseSidingIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Warehouse" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
