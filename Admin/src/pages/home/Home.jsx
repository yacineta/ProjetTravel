import React from 'react'
import "./Home.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Liste from '../../Components/table/Liste'


function Home() {
  return (
    <div className='Home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className='widgets'>
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
           <Featured/>
           <Chart title=" Last 6 Months (Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitel">Latest Transactions</div>
            <Liste/>
            
          </div>
        </div>
    </div>
  )
}

export default Home