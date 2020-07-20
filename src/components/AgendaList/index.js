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
function createData(id, category, title, speaker, local, date, start, end) {
  return { id, category, title, speaker, local, date, start, end };
}

const rows = [
  createData(0, 'Palestra', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00'),
  createData(1, 'Palestra', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00'),
  createData(2, 'Workshop', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00'),
  createData(3, 'Palestra', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00'),
  createData(4, 'Palestra', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00'),
  createData(5, 'Workshop', 'Palestra A', 'Palestrante A', 'Plenaria Principal', '24/08/2020', '14:00', '16:00')
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
      <Title>Agenda</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Palestrante</TableCell>
            <TableCell>Local</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell>Inicio</TableCell>
            <TableCell>Termino</TableCell>
            <TableCell align="right">Acoes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.speaker}</TableCell>
              <TableCell>{row.local}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
              <TableCell align="right"><EditIcon color="action" style={{ cursor: "pointer", marginRight: 10 }} /> <DeleteIcon color="action" style={{ cursor: "pointer", color: "#F00" }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}