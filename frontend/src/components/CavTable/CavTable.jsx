// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const rows = [
//   {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
//   {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein:4.3},
//   {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
//   {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
//   {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
//   {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
//   {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein:4.3},
//   {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
//   {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
//   {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
// ];

// const columnNames = ['VARIANT', 'UNIT PRICE', 'QUANTITY', 'PRODUCTION TIME', 'RATINGS', 'REVIEW', 'FILES', 'STATUS']

// const CavTable = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650,  }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             <TableCell className='base-test' align="right">VARIANT</TableCell>
//             <TableCell className='base-test' align="right">UNIT PRICE</TableCell>
//             <TableCell className='base-test' align="right">QUANTITY</TableCell>
//             <TableCell className='base-test' align="right">PRODUCTION TIME</TableCell>
//             <TableCell className='base-test' align="right">RATINGS</TableCell>
//             <TableCell className='base-test' align="right">CAVELA REVIEW</TableCell>
//             <TableCell className='base-test' align="right">FILES</TableCell>
//             <TableCell className='base-test' align="right">STATUS</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell sx={{ borderBottom: "none" }} align="right">{row.calories}</TableCell>
//               <TableCell sx={{ borderBottom: "none" }} align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }  

// export default CavTable;

import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StarIcon from '@mui/icons-material/Star';
import './table.scss';

const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const columnNames = ["", 'VARIANT', 'UNIT PRICE', 'QUANTITY', 'PRODUCTION TIME', 'RATINGS', 'REVIEW', 'FILES', 'STATUS']

const CavTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columnNames.map((col, index) => (
              <th key={index}>{col}{index !== 0 ? <InfoIcon/> : null}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className='supplier'>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
              <td className='rating'>{row.calories}<StarIcon/></td>
              <td ><span className='review'>{row.fat}</span></td>
              <td className='files'>{row.carbs}<InsertDriveFileIcon/></td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CavTable;