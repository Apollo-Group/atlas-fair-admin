import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

import Title from '../Title';

// Generate Order Data
function createData(id, name, category) {
  return { id, name, category };
}

const rows = [
  createData(0, 'Elvis Presley', 'Posicao A'),
  createData(1, 'Paul McCartney', 'Posicao A'),
  createData(2, 'Tom Scholz', 'Posicao B'),
  createData(3, 'Michael Jackson', 'Posicao C'),
  createData(4, 'Bruce Springsteen', 'Posicao B'),
  createData(5, 'Michael Jackson', 'Posicao C'),
  createData(6, 'Bruce Springsteen', 'Posicao B'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Banners</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Posição</TableCell>
            <TableCell align="right">Acoes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right"><EditIcon color="action" style={{cursor: "pointer", marginRight: 10}}/> <DeleteIcon color="action" style={{cursor: "pointer", color:"#F00"}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}