import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { mainListItems, secondaryListItems } from '../../components/SiderMenu';
import Title from '../../components/Title';
import ExhibitorsList from '../../components/ExhibitorsList'
import Deposits from '../../components/Visitors'
import booth from '../../assets/images/booth.jpeg'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { GeneralForm, FilesForm, BoothForm } from './styles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Atlas Fairs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  input: {
    display: 'none',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Expositores
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                <h1>Dados do Expositor</h1>
                <form>
                  <GeneralForm>
                    <TextField required id="outlined-required" label="Title" defaultValue="Nome do Expositor" variant="outlined" style={{ width: '100%' }} />
                    <FormControl variant="outlined" className={classes.formControl} style={{ width: '50%', marginTop: 30 }}>
                      <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={false}
                        onChange={() => { }}
                        label="category"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Software</MenuItem>
                        <MenuItem value={20}>Hardware</MenuItem>
                        <MenuItem value={30}>Outros</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      required
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      defaultValue="Criamos nossa empresa em 1990..."
                      variant="outlined"
                      style={{ width: '100%', marginTop: 30 }}
                    />

                    <TextField required id="outlined-required" label="Contato Whatsapp" defaultValue="Contato Whatsapp" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Contato Zoom" defaultValue="Contato Zoom" variant="outlined" style={{ width: '100%', marginTop: 30, marginBottom: 30 }} />
                    <Title>Cartao de visita </Title>
                    <TextField required id="outlined-required" label="Nome Contato" defaultValue="Contato Joao" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Telefone Contato" defaultValue="Contato Telefone" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Celular Contato" defaultValue="Contato Celular" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Email Contato" defaultValue="Email Email" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Site Web" defaultValue="Contato www." variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                  </GeneralForm>

    {/*               <FilesForm>
                    <Title>Produtos ou Servico </Title>
                    <TextField required id="outlined-required" label="Nome Produto" defaultValue="Produto A" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                    <TextField required id="outlined-required" label="Valor Produto" defaultValue="29,90" variant="outlined" style={{ width: '100%', marginTop: 30 }} />
                  </FilesForm> */}

                  <FilesForm>
                    <Title>Upload de Arquivos </Title>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" style={{ marginTop: 30 }}>
                        Adicionar Logo
                     </Button>
                    </label>

                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" style={{ marginTop: 30 }}>
                        Adicionar PDF 1
                     </Button>
                    </label>

                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" style={{ marginTop: 30 }}>
                        Adicionar PDF 2
                     </Button>
                    </label>
                  </FilesForm>


                  <BoothForm>
                    <Title>Dados do Estande </Title>
                    <div className="layout">
                      <FormControl variant="outlined" className={classes.formControl} style={{ width: '50%', marginTop: 30 }}>
                        <InputLabel id="demo-simple-select-outlined-label" style={{ width: 300 }}>Tipo de Estande</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={false}
                          onChange={() => { }}
                          label="category"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Tipo A</MenuItem>
                          <MenuItem value={20}>Tipo B</MenuItem>
                          <MenuItem value={30}>Tipo C</MenuItem>
                        </Select>
                      </FormControl>
                      <img src={booth} alt="Girl in a jacket" width="40%" height="50%" />
                    </div>

                    <Title>Links de Videos do Estande </Title>
                    <TextField required id="outlined-required" label="URL 1" defaultValue="https://www.youtube.com" variant="outlined" style={{ width: '100%', marginTop: 30 }} />

                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span" style={{ marginTop: 30 }}>
                        Adicionar Imagem do Estande Customizado .PNG
                     </Button>
                    </label>
                  </BoothForm>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    style={{ width: '80%', marginLeft: '10%', marginTop: 30 }}
                  >
                    Salvar
                 </Button>
                </form>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ExhibitorsList />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}