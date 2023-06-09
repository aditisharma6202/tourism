import React from "react";
import "./pages.css";
import Header from "./header";
import goldenTemple from "../images/goldenTemple.jpg";
import hawaMahal from "../images/hawaMahal.jpg";
import kerala from "../images/kerala.jpg";
import tajTemple from "../images/tajTemple.jpg";
import Indiamap from "../images/Indiamap.jpg"
import Chart from "react-apexcharts";
function HomePages() {
 const  series= [20, 10, 7, 13,50]
 const options =  {
  chart: {
    type: 'donut',
    height:200,
    
  },
  fill: {
    colors: [ '#4169E1', '#0ABAB5', '#ee9f27','#d3d3d3','#00B7EB']
  },
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '45%'
      }
    }
  },

  responsive: [{
    breakpoint: 480,
width:300,
    options: {
      
      legend: {
       show:false
      },
    
     
    }
  }]}

  return (
    <div>
      <Header />
      <div className="main-header">
        <div className="col-12">
          <img
            src={goldenTemple}
            alt="goldentemple"
            className="col-3 image-header box-inset-shadow"
          />
          <img src={hawaMahal} alt="hawaMahal" className="col-3 image-header" />
          <img src={kerala} alt="hawaMahal" className="col-3 image-header" />
          <img src={tajTemple} alt="hawaMahal" className="col-3 image-header" />
        </div>



<div className="row">
  <div className="col-md-5 col-12">
    <img src={Indiamap} alt="indiamap" width={'500'} />
  </div>
  <div className="col-md-3 col-12">
    <div className="row d-flex justify-content-center align-items-center ps-4 pt-3">
      <ul >
        <li className="pt-1">  <h3 className=" fw-400 ps-4"> Historical</h3></li>
        <li className="pt-1" >  <h3 className="fw-400 ps-4"> Marketplace</h3></li>
        <li className="pt-1">  <h3 className="fw-400 ps-4 "> Coastal Lakes</h3></li>
        <li className="pt-1" >  <h3 className="fw-400 ps-4"> Spiritual Religious</h3></li>
        <li className="pt-1">  <h3 className="fw-400 ps-4"> Wildlife</h3></li>

      </ul>
    </div>
    <div className="green-btn m-3">
      <div className="fw-800 f-16 text-center">Total Number of Site</div>
      <div className="f-2 fw-800 text-center">185</div>
    </div>
  </div>
  <div className="col-md-3 col-12">
  <div id="chart" className="pt-3 d-flex justify-content-center">
        <Chart options={options} series={series} type="donut" width="470" />
</div>
    
  </div>

</div>
     
      </div>
    </div>
  );
}

export default HomePages;
