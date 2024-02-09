import React from 'react'
import "./Single.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Chart from '../../Components/chart/Chart'
import Liste from '../../Components/table/Liste'

function Single() {
  return (
    <div className='Single'>
        <Sidebar/>
       
         
       
     
      
      <div className='singleContainer2'>
         <Navbar/>
       <div className="topSingle">
        <div className="leftSingle">
          <div className="editButton">Edite</div>
          <div className="titleLeft">Information</div>
          <div className="itemTitle">
            <img
             src="https://images.pexels.com/photos/1374884/pexels-photo-1374884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
             alt=''
              className='ItemImg'/>
              <div className="details">
                <h1 className='itemTitle'>Jane Doer</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">fhone:</span>
                  <span className="itemValue">+213  00128769</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">elton st.6955Yb .Fertaka</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Cuntry:</span>
                  <span className="itemValue">Algeria</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane@gmail.com</span>
                </div>
              </div>
          </div>

        </div>
        <div className="righteSingle">
          <Chart aspect={3/1} title="User Spending (Last 6 Months)" />
        </div>
        </div> 
       <div className="bottomSingle">
        <h1 className='titleLeft'>Last transation</h1>
       <Liste/>
       </div>

      </div>
    </div>
  )
}

export default Single