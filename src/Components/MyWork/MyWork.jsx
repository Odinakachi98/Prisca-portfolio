import React from 'react'
import './MyWork.css'
import theme from '../../assets/themepattern.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    
     <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="" style={{ width: "100px", height: "100px"}} />
      </div>
      <div className="mywork-container">
       {mywork_data.map((work,index)=>{
         return <img key={index} src={work.w_img} alt="" />
       })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
     </div>   
   
  )
}

export default MyWork
