import React from 'react';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import InfoIcon from '@material-ui/icons/Info';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SchoolIcon from '@material-ui/icons/School';
import TheatersIcon from '@material-ui/icons/Theaters';

export const mainListItems = (
  <div>
    <Link href="http://localhost:3000/home" >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/informations" >
    <ListItem button> 
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Informações Evento" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/exhibitors" >
    <ListItem button>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Expositores" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/visitors" >
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Visitantes" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/sponsors" >
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Patrocinadores" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/banners" >
    <ListItem button>
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary="Banners" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/speeches" >
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Palestras" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/workshops" >
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Workshops" />
    </ListItem>
    </Link>
    <Link href="http://localhost:3000/agendas" >
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" />
    </ListItem>
    </ Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
   {/*  <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);