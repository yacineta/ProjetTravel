import React from 'react'
import'./Liste.css'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';

// import Paper from '@mui/material/Paper';
// import { Paper } from '@mui/material';





// // function createData(
// //   name: string,
// //   calories: number,
// //   fat: number,
// //   carbs: number,
// //   protein: number,
// // ) {
// //   return { name, calories, fat, carbs, protein };
// // };
// const rows = [
//   {
//       id:1143155,
//       product:"Acer Nitro",
//       img:"  ",
//       customer:"John Smith",
//       date:"1 March",
//       amount:785,
//       method:"Cash on Delivery",
//       status:"Approved",
//   },
//   {
//       id:1143155,
//       product:"  Playstation 5",
//       img:"  ",
//       customer:"Michel Doe",
//       date:"1 March",
//       amount:900,
//       method:"Cash on Delivery",
//       status:"Pending",
//   },
//   {
//       id:1143155,
//       product:"Razer Blade 15",
//       img:"  ",
//       customer:"John Smith",
//       date:"1 March",
//       amount:920,
//       method:"Online",
//       status:"Approved",
//   },
//   {
//       id:2342355,
//       product:"Asus Rog Strix",
//       img:"  ",
//       customer:"Harold Carol",
//       date:"1 March",
//       amount:2000,
//       method:"Online",
//       status:"Pending",
//   },
// ]

const Liste = () => {
    const rows = [
          {
            _id:1143155,
            product:"Acer Nitro",
            img:" https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
            customer:"John Smith",
            date:"1 March",
            amount:785,
            method:"Cash on Delivery",
            status:"Approved",
        },
        {
          _id:1143155,
            product:"  Playstation 5",
            img:" https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
            customer:"Michel Doe",
            date:"1 March",
            amount:900,
            method:"Cash on Delivery",
            status:"Pending",
        },
        {
          _id:1143155,
            product:"Razer Blade 15",
            img:" https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
            customer:"John Smith",
            date:"1 March",
            amount:920,
            method:"Online",
            status:"Approved",
        },
        {
          _id:2342355,
            product:"Asus Rog Strix",
            img:"https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  ",
            customer:"Harold Carol",
            date:"1 March",
            amount:2000,
            method:"Online",
            status:"Pending",
        },

        {
          _id:2342355,
          product:"Asus Rog Strix",
          img:"https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  ",
          customer:"Harold Carol",
          date:"1 March",
          amount:2000,
          method:"Online",
          status:"Pending",
      },
    ];
  return (
    <div>
       {/*component={" Paper"} */}
         <TableContainer   className="Tablee">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className="tableCell">Tracking id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell' >
                {row.id}
              </TableCell>
              
              <TableCell className='tableCell'>
                <div className="cellWarpper">
                   <img src={row.img} alt='' className='imag'/>
                   {row.product} 
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  )
}

export default Liste;