import React from 'react';

const Pagination = ({ herosPerPage, totalHeros, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeros / herosPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className='pagination'>
      <div className='next-span  p_size'>
        <span>‹</span>
      </div>
      <div className='pagination_num'>
        {
            pageNumbers.map( number => (
                <span key={ 'page-' + number } onClick={ () => paginate(number)}>{ number }</span>
            ))
        }
      </div>
      <div className='next-span p_size'>
        <span>›</span>
      </div>
    </div>
  );
};

export default Pagination;
