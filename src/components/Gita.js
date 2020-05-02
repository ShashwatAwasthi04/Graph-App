import React, { Fragment,Component } from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Gita extends Component{
    state = {
        chapters: [],
        value: [],
        isLoading: true,
        errors: null
      };
    
      componentDidMount() {
        axios
          .get("https://bhagavadgita.io/api/v1/chapters")
          .then(response =>
            response.data.results.map(chapters => ({
                chapter_number: '$(chapters.chapter_number)', 
                name: '$(chapters.name)', 
                name_english: '$(chapters.name_english)', 
                name_transliterated: '$(chapters.name_transliterated)', 
                name_transliterated_simple: '$(chapters._transliterated_simple)', 
                verses_count: '$(chapters.verses_count)'
            }))
          )
          .then(chapters => {
            this.setState({
              chapters,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }

      render() {
        return (
          <Fragment>
              <div>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Verses in each chapter of Gita',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <Button variant="outline-primary"><Link to="/">Back to Home</Link></Button>
          <Button variant="outline-primary"><Link to="/Person">Display Other Graph</Link></Button>
          </Fragment>
        );
      }
};
export default Gita;
