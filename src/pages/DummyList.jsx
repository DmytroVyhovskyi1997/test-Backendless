import { Table, TableRow, TableCell, TableBody } from './Table.styled';

const DummyList = ({ array }) => {
  return (
    <Table>
      <TableBody>
        {array.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DummyList;
