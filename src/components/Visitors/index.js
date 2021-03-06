import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Visitantes Cadastrados</Title>
      <Typography component="p" variant="h4">
        3.024
      </Typography>
      <Title>Estandes Cadastrados</Title>
      <Typography component="p" variant="h5">
        264
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        30 de Agosto de 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais
        </Link>
      </div>
    </React.Fragment>
  );
}