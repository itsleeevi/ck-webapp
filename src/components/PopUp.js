import React, { useState } from 'react';

import CrystalLeft from '../images/crystal.png';
import CrystalRight from '../images/crystal02.png';

const PopUp = (props) => {
 
  const [range, setRange] = useState(10);
  const [address, setAddress] = useState('Address');
  const [rentDate, setRentDate] = useState('2017-W01');

  const onRangeChange = (event) => {
    setRange(event.target.value);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onRentDateChange = (event) => {
    setRentDate(event.target.value);
  };

  return (
    <>
      {props.opened && (
        <div
          className='popup-wrapper modal fade'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='popup-overlay' onClick={() => props.closepop()}></div>
          <div className='main_pop'>
            <div className='inner_popup'>
              <h1 className='list_rent'>List here to rent</h1>
              <div className='pop_input'>
                <label>Address (optional for direct rent)</label>
                <input type='text' name='' value={ address } onChange={ onAddressChange }  />
                <label>Duration</label>
                <input id='week' type='week' name='week' value={ rentDate } onChange={ onRentDateChange } />
              </div>
              <div className='rent_news'>
                <h3>RENTER { range }%</h3>
                <h3>OWNER { 100 - range }%</h3>
              </div>
              <div className='range'>
                <input
                  type='range'
                  min='1'
                  max='100'
                  value={ range }
                  className='slider'
                  id='myRange'
                  onChange={onRangeChange}
                />
              </div>
              <div className='check_box'>
                <input type='checkbox' name='' value='' />
                By checking this box I agree to the Terms of Service
              </div>
              <div className='btn_approve'>
                <button
                    onClick={() => alert('Approved') }
                    type='button'
                    className='btn btn-primary'
                    id='app_btn'
                >
                  APPROVE
                </button>
                <button
                    onClick={() => alert('Rented') }
                    type='button'
                    className='btn btn-primary'
                    id='rent_btn'
                >
                  RENT
                </button>
              </div>
              <div className='Crystal_image'>
                <img src={CrystalLeft} />
              </div>
              <div className='Crystal_image_right'>
                <img src={CrystalRight} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
