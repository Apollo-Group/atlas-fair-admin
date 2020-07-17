import React from 'react';
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
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Informações Feira" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Expositores" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Visitantes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Patrocinadores" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary="Banners" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Palestras" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Workshops" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" />
    </ListItem>
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