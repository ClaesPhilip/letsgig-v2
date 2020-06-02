import React, { Component } from 'react';
import '../css/style.css';
import Card from '../components/Card';
import data from '../data/data';

import { MdArrowBack, MdArrowForward } from "react-icons/md";


class SlideShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[6]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <h1 className='text-4xl font-bold text-center text-black mb-8'>Senaste giggen</h1>

        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        ><MdArrowBack className='text-4xl outline-none border-none' /></button>
        
        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        ><MdArrowForward className='text-4xl outline-none border-none' /></button>
        

        <div className="page">
          <section className='section'>
            
          </section>

          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${property.index * (100 / properties.length)}%)`
              }}>
                {
                  properties.map(property => <Card key={property._id} property={property} />)
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SlideShow;