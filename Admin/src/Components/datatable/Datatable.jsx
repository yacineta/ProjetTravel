import React, { useEffect, useState } from 'react'
import "./Datatable.css"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';



// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     renderCell:(params)=>{
//         return(
//             <>
//             <span>{params.row.lastName}</span>
//             <p>{params.row.age}</p>
//             </>
            
//         )
//     }
//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];




// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/"[1]);
  const [list,setList] = useState()
  const [data,setData] = useState(userRows);
  const {data1,loading,error} = useFetch(`/${path}`)
    // console.log("DATA",data)

    useEffect(()=>{
      setList(data)
      

    },[data])

    const handleDelete = async (id) =>{
      
      try{
        
      // 
      await axios.delete( 
        `  /${path}/${id}`
        );
      
       setData(data.filter((item) => item._id !== id));
      // *****
      }catch(err){}
      // ***
          console.log("error");
    };
    const actionColumn = [{field:"action", headerName:"Action",width:200,
    renderCell:(params)=>{
        return(
            <div className='cellAction'>
                 <Link to= "/users/test" style={{textDecoration:"none"}}>
                <div className='viewButton'>View</div>
                 </Link>
                <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
                
            </div>
        );
    },
},
];
  return (
    <div  className='Datatable'>
        <div className="datatableTitle">
            Add New 
            {path}
            
            {/* {`/${path}/users/new`}  */}
            <Link to=   "/users/new"  className='Link'>
              Add New
        </Link>
        </div>
         <DataGrid className='DataGrid'
        //  rows={userRows}
        // list
        rows={data}
// 
           userColumns
        columns={columns.concat(actionColumn)}

      

        initialState={{
          pagination: {
            paginationModel: { page: 0,
                pageSize: 9,
             },
          },
        }}
       
        pageSiz={9}
        pageSizeOptions={[5,10]}
        checkboxSelection
         getRowId={(row) => row.id}
                                  //  _
      />

    </div>
  );
};

export default Datatable;