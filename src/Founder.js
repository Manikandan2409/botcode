import React from 'react';
import './Founder.css'; 


function Founder() {
    return (
        <div className="container my-5" id="about">
            <br/>
            <br/> 
            <p className="text-center"  style={{ fontSize: '39px', fontWeight: '580' ,fontFamily:'Poppins',color:'#349bc6'}}>About us</p>
        
            <div className="founder-section">
                <div className="founder-image">
                    <img src="founder.png" className="img-fluid" alt="Founder" loading='lazy'/>
                </div>
                <div className="founder-text" style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',fontWeight:'579',lineHeight:'25px'}}>
                    <p>
                    Customer-Centric Approach: Your satisfaction is our priority. From helping you choose the perfect car to offering personalized service plans, we’re with you every step of the way. Backed by a team of skilled technicians and knowledgeable sales advisors, we ensure you receive accurate guidance and top-quality service every time.

                                 </p>
                </div>
            </div>
<br/>

           
            <div className="business-section">
                <div className="business-item" >
                <i class="fa-solid fa-briefcase" style={{fontSize:'33px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>450+ customers</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-calendar-days" style={{fontSize:'32px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>8+ years experience</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-users" style={{fontSize:'29px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>39 employees</h3>
                </div>
            </div>
        </div>
    );
}

export default Founder;
