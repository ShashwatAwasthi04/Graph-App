import React, { Fragment } from 'react';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Persons from '../persons.json';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const mydata = {
    labels: [Persons[0].Persons_faces_coordinates[0].Person_id,Persons[1].Persons_faces_coordinates[0].Person_id,Persons[2].Persons_faces_coordinates[0].Person_id,Persons[3].Persons_faces_coordinates[0].Person_id,Persons[4].Persons_faces_coordinates[0].Person_id,Persons[5].Persons_faces_coordinates[0].Person_id,Persons[6].Persons_faces_coordinates[0].Person_id,Persons[7].Persons_faces_coordinates[0].Person_id,Persons[8].Persons_faces_coordinates[0].Person_id,Persons[9].Persons_faces_coordinates[0].Person_id],
    datasets: [
      {
        label: 'Area Of Person',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [(Persons[0].Persons_faces_coordinates[0].coordinates.x_max-Persons[0].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[0].Persons_faces_coordinates[0].coordinates.y_max-Persons[0].Persons_faces_coordinates[0].coordinates.y_min),(Persons[1].Persons_faces_coordinates[0].coordinates.x_max-Persons[1].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[1].Persons_faces_coordinates[0].coordinates.y_max-Persons[1].Persons_faces_coordinates[0].coordinates.y_min),(Persons[2].Persons_faces_coordinates[0].coordinates.x_max-Persons[2].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[2].Persons_faces_coordinates[0].coordinates.y_max-Persons[2].Persons_faces_coordinates[0].coordinates.y_min),(Persons[3].Persons_faces_coordinates[0].coordinates.x_max-Persons[3].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[3].Persons_faces_coordinates[0].coordinates.y_max-Persons[3].Persons_faces_coordinates[0].coordinates.y_min),(Persons[4].Persons_faces_coordinates[0].coordinates.x_max-Persons[4].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[4].Persons_faces_coordinates[0].coordinates.y_max-Persons[4].Persons_faces_coordinates[0].coordinates.y_min),(Persons[5].Persons_faces_coordinates[0].coordinates.x_max-Persons[5].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[5].Persons_faces_coordinates[0].coordinates.y_max-Persons[5].Persons_faces_coordinates[0].coordinates.y_min),(Persons[6].Persons_faces_coordinates[0].coordinates.x_max-Persons[6].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[6].Persons_faces_coordinates[0].coordinates.y_max-Persons[6].Persons_faces_coordinates[0].coordinates.y_min),(Persons[7].Persons_faces_coordinates[0].coordinates.x_max-Persons[7].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[7].Persons_faces_coordinates[0].coordinates.y_max-Persons[7].Persons_faces_coordinates[0].coordinates.y_min),(Persons[8].Persons_faces_coordinates[0].coordinates.x_max-Persons[8].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[8].Persons_faces_coordinates[0].coordinates.y_max-Persons[8].Persons_faces_coordinates[0].coordinates.y_min),(Persons[9].Persons_faces_coordinates[0].coordinates.x_max-Persons[9].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[9].Persons_faces_coordinates[0].coordinates.y_max-Persons[9].Persons_faces_coordinates[0].coordinates.y_min)]
      },
      {
        label: 'Square root of Area Of Person',
        backgroundColor: 'rgba(0,0,255,0.3)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [Math.sqrt((Persons[0].Persons_faces_coordinates[0].coordinates.x_max-Persons[0].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[0].Persons_faces_coordinates[0].coordinates.y_max-Persons[0].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[1].Persons_faces_coordinates[0].coordinates.x_max-Persons[1].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[1].Persons_faces_coordinates[0].coordinates.y_max-Persons[1].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[2].Persons_faces_coordinates[0].coordinates.x_max-Persons[2].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[2].Persons_faces_coordinates[0].coordinates.y_max-Persons[2].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[3].Persons_faces_coordinates[0].coordinates.x_max-Persons[3].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[3].Persons_faces_coordinates[0].coordinates.y_max-Persons[3].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[4].Persons_faces_coordinates[0].coordinates.x_max-Persons[4].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[4].Persons_faces_coordinates[0].coordinates.y_max-Persons[4].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[5].Persons_faces_coordinates[0].coordinates.x_max-Persons[5].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[5].Persons_faces_coordinates[0].coordinates.y_max-Persons[5].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[6].Persons_faces_coordinates[0].coordinates.x_max-Persons[6].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[6].Persons_faces_coordinates[0].coordinates.y_max-Persons[6].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[7].Persons_faces_coordinates[0].coordinates.x_max-Persons[7].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[7].Persons_faces_coordinates[0].coordinates.y_max-Persons[7].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[8].Persons_faces_coordinates[0].coordinates.x_max-Persons[8].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[8].Persons_faces_coordinates[0].coordinates.y_max-Persons[8].Persons_faces_coordinates[0].coordinates.y_min)),Math.sqrt((Persons[9].Persons_faces_coordinates[0].coordinates.x_max-Persons[9].Persons_faces_coordinates[0].coordinates.x_min)*(Persons[9].Persons_faces_coordinates[0].coordinates.y_max-Persons[9].Persons_faces_coordinates[0].coordinates.y_min))]

      }
    ]
    
  };
  const Person =() =>
  (
        <div>
          <h2>Bar Graph Example</h2>
          <Bar
            data={mydata}
            width={100}
            height={200}
            options={{
              maintainAspectRatio: false
            }}
          />
          <Button variant="outline-primary"><Link to="/">Back to Home</Link></Button>
          <Button variant="outline-primary"><Link to="/Gita">Display Next Graph</Link></Button>
        </div>
        
        
  );

export default Person;