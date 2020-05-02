import React, { Fragment } from 'react';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Persons from '../persons.json';

const mydata = {
    labels: Persons.frame_id[0].Persons_faces_coordinates,
    datasets: [
      {
        label: 'Area Of Person',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  

  const Gita =() =>
  (
   
  
    
        <div>
          <h2>Vertical Bar Example (custom size)</h2>
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

export default Gita;
