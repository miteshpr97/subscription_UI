
import React, { useState } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import iconClock from '../image/Icon Clock.png';
import pay from '../image/Razorpay Icon.png';

const SubscriptionTemplate = () => {
  const [selectedOption, setSelectedOption] = useState('yearly');
  const [totalPrice, setTotalPrice] = useState(0);
  const [subscriptionFee, setSubscriptionFee] = useState(18500);
  const [offerClicked, setOfferClicked] = useState(false);

  const handleOptionChange = (option, price) => {
    if (offerClicked) {
      setSubscriptionFee(18500);
      setOfferClicked(false);
    }
    const totalPriceWithGST = price + price * 0.18; // Calculate total price with 18% GST
    setSelectedOption(option);
    setTotalPrice(totalPriceWithGST);
  };

  const handleLimitedOfferClick = () => {
    if (!offerClicked) {
      const newSubscriptionFee = subscriptionFee - 18401;
      setSubscriptionFee(newSubscriptionFee);
      const totalPriceWithGST = newSubscriptionFee + newSubscriptionFee * 0.18;
      setTotalPrice(totalPriceWithGST);
      setOfferClicked(true);
    }
  };

  const getBoxClassName = (option) => {
    if (option === '12 months ex') {
      return 'subscription-option selected-gray';
    } else if (option === selectedOption) {
      return 'subscription-option selected';
    } else {
      return 'subscription-option';
    }
  };

  return (
    <div className="subscription-container">
      <div className='circle'>
        <div>
          <span className='ss'> 1  </span> Sing Up
        </div>
        <div>
          <span className='ss'> 2 </span> Subscribe
        </div>
      </div>
      <p className='para'> Select your Subscription plan</p>
      <div className={getBoxClassName('12 months ex')}>
        <p className='Offerexpired'>Offer expired</p>
        <div>
          <input className='radio' type="radio" id="12 months ex" value="12 months ex" />
          <label className='bold-text' htmlFor="2years">12 Months Subscription</label>
        </div>
        <span className="price bold">Total &#8377; 96</span>
        <span className="spanMO">&#8377; 8 / mo</span>
      </div>
      <div className={getBoxClassName('yearly')} onClick={() => handleOptionChange('yearly', 180)}>
        <p className="recommended">Recommended</p>
        <div>
          <input
            type="radio"
            id="yearly"
            value="yearly"
            checked={selectedOption === 'yearly'}
            onChange={() => handleOptionChange('yearly', 180)}
          />
          <label className='bold-text' htmlFor="yearly">12 Months Subscription</label>
        </div>
        <span className="price bold">Total &#8377; 180</span>
        <span className="spanMO">&#8377; 15 / mo</span>
      </div>
      <div className={getBoxClassName('6months')} onClick={() => handleOptionChange('6months', 150)}>
        <div>
          <input
            type="radio"
            id="6months"
            value="6months"
            checked={selectedOption === '6months'}
            onChange={() => handleOptionChange('6months', 150)}
          />
          <label className='bold-text' htmlFor="6months">6 Months Subscription</label>
        </div>
        <span className="price bold">Total &#8377; 150</span>
        <span className="spanMO">&#8377; 25 / mo</span>
      </div>
      <div className={getBoxClassName('monthly')} onClick={() => handleOptionChange('monthly', 99)}>
        <div>
          <input
            type="radio"
            id="monthly"
            value="monthly"
            checked={selectedOption === 'monthly'}
            onChange={() => handleOptionChange('monthly', 99)}
          />
          <label className='bold-text' htmlFor="monthly">3 Month Subscription</label>
        </div>
        <span className="price bold">Total &#8377; 99</span>
        <span className="spanMO">&#8377; 33 / mo</span>
      </div>
      <hr />
      <div className='Subcriptionfee'>
        <span className='bold-text'> Subscription Fee </span>
        <span>&#8377; 18,500 </span>
      </div>
      <div className={offerClicked ? 'limitedoffer disabled' : 'limitedoffer'} onClick={handleLimitedOfferClick}>
        <div className='limitofferchild'>
          <span className='bold-text'> limited time offer</span>
          <span>  - &#8377;18,401</span>
        </div>
        <span className='offer'>
          <img src={iconClock} alt="Logo" className="lconClockImg" />
          Offer valid till 25th March 2023
        </span>
      </div>
      <div className="subscription-option-total">
        <div>
          <span>Total (incl. 18% GST)</span>
        </div>
        <span className="price bold">&#8377; {totalPrice}</span>
      </div>
      <div className='button'>
        <button className='cancel bold-text'> cancel </button>
        <button className='proceed bold-text'> proceed to pay </button>
      </div>
      <img src={pay} alt="Logo" className="payIcon" />
    </div>
  );
};

export default SubscriptionTemplate;

