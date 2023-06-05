import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CodeSection from '../sections/CodeSection';
import { AppContext } from '../../App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import EditIcon from '@mui/icons-material/Edit';
import SourceIcon from '@mui/icons-material/Source';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import FolderComp from '../FolderComp';
import { stylesId, stylesName } from '../../db/Database';

import { root,rootDemo } from '../../db/Database';

const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Main() {
  const { selectedFolder,open,setOpen,currTheme,setIndex, setSavedTheme,setCurrTheme,setShow,show}=React.useContext(AppContext);
  const theme = (currTheme==="light")?createTheme({palette: {
    mode: 'light',
  },}):createTheme({
    palette: {
        mode: 'dark',
      },
  });

  const [dialogShow,setDialogShow]=React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDesign=()=>{
    if(open===false)setOpen(true);
  }

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = (e) => {
    setDialogOpen(true);
  };

  const handleDialogClose = (e) => {
    setDialogOpen(false);
  };

  const handleNewFolder=()=>{
    handleDialogOpen();
  }
  const handleNewFile=()=>{
    handleDialogOpen();
  }
  const handleRename=()=>{
    handleDialogOpen();
  }
  const handleDelete=()=>{
    handleDialogOpen();
  }

  return (
    <ThemeProvider theme={theme} >    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {"Mini variant drawer".toUpperCase()}
          </Typography>
          <Box sx={{display:"flex"}} >
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={`Shivam Kumar`} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
          <IconButton sx={{ ml: 0 }} onClick={()=>setCurrTheme((prev)=>{
            if(prev==="dark")return "light";
            else return "dark";
        })} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={()=>setShow((prev)=>!prev)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                {show===false?<EditIcon/>:<SourceIcon/>}

                </ListItemIcon>
                <ListItemText primary={(show===false)?"Edit Source":"Save Code"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={handleDesign}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <DesignServicesIcon/>

                </ListItemIcon>
                <Autocomplete
                disablePortal
                disableCloseOnSelect
                id="combo-box-1"
                options={stylesName}
                sx={{ opacity: open ? 1 : 0 ,width: open? 200:0}}
                renderInput={(params) => <TextField onSelect={(e)=>{
                    setSavedTheme(e.target.value);
                    if(stylesId.hasOwnProperty(e.target.value)){
                        setIndex(stylesId[e.target.value]);
                    }
                }}
                sx={{color:'inherit'}} {...params} label="Theme" />}
                />
              </ListItemButton>
              </ListItem>
        </List>
        <Divider />
        <Typography variant='subtext' style={{cursor:"pointer",color:"rgba(255,255,255,1)"}} alignContent={'center'} alignItems={'center'} textAlign={'left'} marginTop={2} paddingLeft={3} onClick={()=>setOpen((prev)=>!prev)} >
          <span
          style={{display:"flex",alignItems:"center"}}
          >{(open)?"EXPLORER":"📂"}
          {(open===true && selectedFolder!==null)?(
            <ButtonGroup variant='text' size='small' style={{scale:"0.6"}} disablePadding >
            <Button onClick={handleNewFolder} ><CreateNewFolderIcon/></Button>
            <Button onClick={handleNewFile} ><NoteAddIcon/></Button>
            <Button onClick={handleRename} ><DriveFileRenameOutlineIcon/></Button>
            <Button onClick={handleDelete} ><DeleteIcon/></Button>
          </ButtonGroup>
          ):null}
        </span>
        </Typography>
        {(open)&&(<FolderComp ele={rootDemo} />)}
        <Fab
        style={{ transform: 'scale(0.7)' }}
        onClick={()=>window.scrollTo(0,0)}
        sx={{position: 'absolute',bottom: 16,right:5, opacity:0.8, background:(theme.palette.mode==="light")?"black":"white","&:hover":{background:"black"}}} aria-label={'Go to top'} color={'inherit'}>
          <UpIcon sx={{color:"gray"}} />
        </Fab>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        <CodeSection/>
      </Box>
    </Box>
    {dialogOpen&&(
        <>
        <Button variant="outlined" onClick={handleDialogOpen}>
        dialogOpen form dialog
      </Button>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      </>
      )}
    </ThemeProvider>
  );
}