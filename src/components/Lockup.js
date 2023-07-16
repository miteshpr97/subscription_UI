import React from 'react';
import '../App.css';
import icon from '../image/Icon.png';
import iconClock from '../image/Icon Clock.png';
import icon1 from '../image/Icon1.png';
import icon2 from '../image/Icon2.png';
import icon3 from '../image/Icon3.png';

const Lockup = () => {
  return (
    <div className='Lockup-container'>
      <div className='left-contain'>
        <div className='contain'>
          <h1>
            Access current course worth <br />
            &#8377; <span style={{ textDecoration: 'line-through', color: 'red' }}>18,500</span> just &#8377; <span style={{ color: 'blue' }}>99</span> per year!
          </h1>

          <div className='contain'>
            <p >
              <img src={icon} alt="Image description" className='containIcon' />
              <span style={{ color: 'blue' }}>100+</span>  <span> Job relevant courses</span>
            </p>
            <p>
              <img src={iconClock} alt="Image description" className='containIcon' />
              <span style={{ color: 'blue' }}>20,000+ </span><span>Hours of content</span>
            </p>
            <p>
              <img src={icon1} alt="Image description" className='containIcon' />
              <span style={{ color: 'blue' }}>Exclusive </span><span>webinar access</span>
            </p>
            <p>
              <img src={icon2} alt="Image description" className='containIcon' />
              <span>Scholarship worth</span><span style={{ color: 'blue' }}> &#8377; 94,500 </span>
            </p>
            <p>
              <img src={icon3} alt="Image description" className='containIcon' />
              <span style={{ color: 'blue' }}> Ad Free </span> <span> learning experience</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Lockup;



