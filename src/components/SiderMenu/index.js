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
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';


export const mainListItems = (
  <div>
    <Link href="https://modest-darwin-5935e2.netlify.app/home" >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/informations" >
    <ListItem button> 
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Informações Evento" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/spaces" >
    <ListItem button> 
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Espaços do Evento" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/exhibitors" >
    <ListItem button>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Expositores" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/visitors" >
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Visitantes" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/sponsors" >
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Patrocinadores" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/banners" >
    <ListItem button>
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary="Banners" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/speeches" >
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Palestras" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/workshops" >
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Workshops" />
    </ListItem>
    </Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/agendas" >
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Agenda" />
    </ListItem>
    </ Link>
    <Link href="https://modest-darwin-5935e2.netlify.app/faq" >
    <ListItem button>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItem>
    </ Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link href="https://modest-darwin-5935e2.netlify.app/" >
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
    </ Link>
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