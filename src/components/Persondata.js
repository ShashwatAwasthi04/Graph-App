import React, { Fragment } from 'react';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Persons from '../persons.json';

const mydata = {
    labels: [Persons[0].Persons_faces_coordinates[0].Person_id],
    datasets: [
      {
        label: 'Area Of Person',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [Persons[0].Persons_faces_coordinates[0].coordinates.x_min]
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
        </div>
  );

export default Person;