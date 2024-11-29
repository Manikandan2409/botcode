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
                    This template is designed specifically for the laundry business, offering a simple, unique style that makes website creation easy. With Adobe Muse, it’s simple to edit and add content without coding. This multipage template includes a homepage, about page, services page, pricing page, FAQ, blog, and contact page, covering all essential business website needs. It’s an ideal solution for laundry business owners and web developers looking to build professional websites efficiently.

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
