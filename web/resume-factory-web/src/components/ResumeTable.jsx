import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'number', label: 'Number', minWidth: 100 },
  { id: 'title', label: 'Resume Title', minWidth: 200 },
  {
    id: 'level',
    label: 'Level',
    minWidth: 170,
  },
  {
    id: 'company',
    label: 'Company',
    minWidth: 170,
  },
  {
    id: 'date',
    label: 'Created\u00a0date',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(number, title, level, company, date) {
  return { number, title, level, company, date };
}

const rows = [
  createData('1', 'Resume for SAP', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('2', 'Resume for Amazon', 'Internship', 'SAP Inc.', '05-Sep-2019'),
  createData('3', 'Resume for Hootsuit', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('4', 'Resume for volunteer in Vancouver', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('5', 'Resume coop job Summer 2020','Internship', 'SAP Inc.', '05-Sep-2019'),
  createData('6', 'Part-time resume for restaurant', 'Part-time', 'SAP Inc.', '05-Sep-2019'),
  createData('7', 'Full-stack Developer Generac Power System, Inc', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('8', 'Intership resume BCNet', 'Internship', 'SAP Inc.', '05-Sep-2019'),
  createData('9', 'Updated resume for EA', 'Intermediate', 'SAP Inc.', '05-Sep-2019'),
  createData('10', 'Resume Hello Fresh Developer', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('11', 'Resume for UN program', 'Volunteer', 'SAP Inc.', '05-Sep-2019'),
  createData('12', 'English Tutor Resume','Part-time', 'SAP Inc.', '05-Sep-2019'),
  createData('13', 'Backend Dev for Motorola Solutions', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('14', 'Junior Software Engineer', 'Junior', 'SAP Inc.', '05-Sep-2019'),
  createData('15', 'Software Dev Freelancer Resume', 'Freelancer', 'SAP Inc.', '05-Sep-2019'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
