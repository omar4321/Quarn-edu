import React, { useEffect, useState } from 'react';
import {Card,  } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Course = () => {
    const [courses , setCourses] = useState([])
    useEffect(()=>{
     fetch('/Course.json')
     .then(res => res.json())
     .then(data => setCourses(data))
    }, [])
    return (
      
      <div  className="row row-cols-1 row-cols-md-2 g-4 m-5">
   

       {
     courses.map(courses =>(
      <div className='Col'>
      <div className='Card border border-warning rounded-2 w-75  ' >
     <>
     <Card.Img variant="top " className="img-fluid" src={courses?.img}/>
     <Card.Body>
     <Card.Title>{courses?.Name}</Card.Title>
        <Card.Text>
       {courses?.det}
     </Card.Text>
     <Card.Text>
     Price:   {courses?.Price}
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
};

export default Course;




