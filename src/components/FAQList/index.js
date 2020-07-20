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
    createData(0, 'Pergunta 1', 'This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification. This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification. This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification.'),
    createData(1, 'Pergunta 1', 'This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification.'),
    createData(2, 'Pergunta 1', 'This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification.'),
    createData(3, 'Pergunta 1', 'This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification.'),
    createData(4, 'Pergunta 1', 'This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as its more like an autofill. You can learn more about it following the specification.'),
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
            <Title>FAQ</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 120 }}>Pergunta</TableCell>
                        <TableCell>Resposta</TableCell>
                        <TableCell align="right" style={{ width: 100 }}>Acoes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell align="right"><EditIcon color="action" style={{ cursor: "pointer", marginRight: 10 }} /> <DeleteIcon color="action" style={{ cursor: "pointer", color: "#F00" }} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}