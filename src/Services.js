import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'

const Services = () => {
    const services = [
        {
            imgSrc: "https://i.ytimg.com/vi/O2iK0CWvMes/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDkBOMqPSnRUH0owtYQrbhcbANsug",
            title: "Wash and Iron",
            description: "Our Wash and Iron service ensures your clothes are thoroughly cleaned and crisply ironed, ready for you to wear. From everyday shirts to delicate blouses, we handle each item with care, delivering wrinkle-free and fresh-smelling garments every time."
        },
        {
            imgSrc: "https://www.motortrend.com/files/66be495df6b94900092234e9/011-cadillac-opulent-velocity-concept-first-look.jpg?w=768&width=768&q=75&format=webp",
            title: "Dry Cleaning",
            description: "Specialized in treating delicate fabrics, our Dry Cleaning service removes tough stains and odors while preserving the quality of your garments. Ideal for suits, dresses, and other special clothing, we ensure your items are returned clean and perfectly pressed."
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUeIXbk2DqM-Nf7wpeoJUkBf1XsVdKDjKxSvOmCMPIAPJcgxCZJEtS63s_TTCNu2lwZM&usqp=CAU",
            title: "Garment Repairs and Alterations",
            description: "Our Garment Repairs and Alterations service helps extend the life of your favorite clothes. Whether you need a hem adjusted, a zipper replaced, or a tear mended, our skilled tailors will restore your garments to their best condition."
        }];
    return (
        <div className="container my-5" id="services">
            <br/>
            <br/>
            <br/>
             <h2 className="text-center" style={{ fontSize: '39px', fontWeight: '580' ,fontFamily:'Poppins',color:'#349bc6'}}>Our Services</h2>
           <br/>
            <div className="text-center">
                   <p className="sub-heading mb-4" style={{textAlign:'justify',fontFamily:'Poppins',fontSize:'1rem',color:'#666',fontWeight:'579',lineHeight:'29px'}}>
                   At our car service, customer satisfaction is our true measure of success. Our testimonials showcase how we make laundry day easier and more enjoyable, with convenient pick-up and delivery and careful attention to each garment. These stories reflect our commitment to quality, reliability, and exceptional service. If you’ve had a great experience, we’d love for you to share your story and join our community of happy clients!
               </p>
            </div>

          <br/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {services.map((service, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 " style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                            <div className="d-flex align-items-center p-3">
                                <img src={service.imgSrc} alt={service.title} style={{ width: '120px', height: '120px' ,borderRadius:'50%',objectFit:'cover', border: '2px solid #439bc6'}} className="me-3" />
                                <div>
                                    <h5 className="card-title" style={{fontSize:'22px',fontFamily:'Poppins',fontWeight:'630',color:'#439bc6',stroke:''}}>{service.title}</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text " style={{textAlign:'justify',fontFamily:'Poppins',fontWeight:'630',fontSize:'16px',color:'#666'}}>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    );
};

export default Services;
