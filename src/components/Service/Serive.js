
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';


const Serive = () => {
    const [Service , setService] = useState([])
    useEffect(()=>{
     fetch('/Course2.json')
     .then(res => res.json())
     .then(data => setService(data))
    }, [])
    return (
     <>
     <MenuBar></MenuBar>
         <h1 className="text-danger

m-5 fs-1 text ">our more services</h1>
      <div key='id' className="row row-cols-1 row-cols-md-2 g-4 m-5">
   

       {
     Service.map(service =>(
      <div className='Col'>
      <div className='Card border border-warning rounded-2 w-75  '  >
     <>
     <Card.Img variant="top " className="img-fluid" src={service?.img}/>
     <Card.Body>
     <Card.Title>{service?.Name}</Card.Title>
        <Card.Text>
       {service?.det}
     </Card.Text>
     <Card.Text>
     Price:   {service?.Price}
     </Card.Text>
     <Button  variant="primary">join Now</Button>{' '}
     </Card.Body>
   
    </>
    </div>
       </div>  
   ))
  }
      
      
    </div>
    );
    <Footer></Footer>
     </>
    );
};

export default Serive;