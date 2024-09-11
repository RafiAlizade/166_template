import React from 'react'
import { HouseDoorFill, ChevronRight } from 'react-bootstrap-icons'
import './NavigateComp.css'

function NavigateComp({ Parent, Child, SubOption }) {
  return (
    <div className="navigatecomp__main">
        <div className="navigatecomp__inner">
          <HouseDoorFill className="navigatecomp__houseicon" />
          <ChevronRight className='navigatecomp__chevron' />
          {Parent}
          <ChevronRight className='navigatecomp__chevron' />
          {Child}
          {SubOption && (
            <>
              <ChevronRight className='navigatecomp__chevron' />
              {SubOption}
            </>
          )}
        </div>
    </div>
  );
}

export default NavigateComp;
