// import { GiReloadGunBarrel } from "react-icons/gi";

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName:"User", width:230, renderCell:(params)=>{
    return(
         <div className="CellWithImg" style={{ 
            display: "flex",
            alignItems: "center",}}>
            <img className="cellImg" src={params.row.img || ""} alt="avatar"
            style={{
                width:42,height: 42,borderRadius: 50,objectFit: "cover",marginRight: 20,  
            }}
            />
            {params.row.username}
        </div>
    );
  },
},
{ field: 'email', headerName:"Email", width:230,},
{ field: 'country', headerName:"Country", width:100,},
{ field: 'city', headerName:"City", width:100,},
{ field: 'phone', headerName:"Phone", width:100,},
{ field: ' status', headerName:" status", width:160, 
renderCell:(params)=>{
    return <div className={`cellWithStatus ${params.row.status}`} 
    style={{backgroundColor:"",color:"#4caf50"}}
    >{params.row.status}</div>;
},
},

];
export const userRows = [
    { id:1,
    username:"kaisha",
    img:"https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email:"kaisha@gmail.com",
    age:20,
    status:"active",
},
{ id:2,
    username:"Tommy",
    img:"https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"Tommy@gmail.com",
    age:46,
},
{ id:3,
    username:"Shadwo",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"Shadwo@gmail.com",
    age:25,
},
{ id:4,
    username:"jhon wick",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email:"wick@gmail.com",
    age:28,
},
{ id:5,
    username:"Avatar",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"avatar@gmail.com",
    age:42,
},
{ id:6,
    username:"Kakachi",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"Kakachi@gmail.com",
    age:42,
},
{ id:7,
    username:"Naroto",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"Naroto@gmail.com",
    age:42,
},
{ id:8,
    username:" John Snow",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"1snow@gmail.com",
    age:42,
},
{ id:9,
    username:"Yassine",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"yassine@gmail.com",
    age:42,
},
{ id:10,
    username:"khayra",
    img:"https://images.pexels.com/photos/55748/flower-blossom-bloom-blue-55748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status:"active",
    email:"khyara@gmail.com",
    age:42,
},
]
export const hotelsColumns = [
    {field:"_id",headerName:"ID",width:250},
    {
        field:"name",
        headerName:"Hotel Name",
        width:100,
    },
    {
        field:"type",
        headerName:"Type",
        width:100,
    },
    {
        field:"title",
        headerName:"Title",
        width:230,
    },
    {
        field:"city",
        headerName:"City",
        width:100,
    },
];

export const roomColumns = [
    {field:"_id",headerName:"Id",width:70},
    {
        field:"title",
        headerName:"Title",
        width:230,
    },
    {
        field:"desc",
        headerName:"Description",
        width:200,
    },
    {
        field:"price",
        headerName:"price",
        width:100,
    },
    {
        field:"maxPeople",
        headerName:"Max People",
        width:100,
    },
];