import React from 'react'
import './List.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Datatable from '../../Components/datatable/Datatable'

function List({columns}) {
  return (
    <div className='Listee'>
      <Sidebar/>
      <div className="listContainerr">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List