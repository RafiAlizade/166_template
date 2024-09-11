import { useState } from 'react';
import './ServiceCountries.css';
import Map from './../../assets/images/Map.svg'


function ServiceCountries() {

  return (
    <section className="main__servicecountries">
      <div className="container">
        <div className="servicecountries__inner">
          <div className="servicecountries__top">
            <h5 className="servicecountries__label">
              Fəaliyyət göstərdiyimiz ölkələr
            </h5>
          </div>

          <div className="servicecountries__bottom">
            <div className="servicecountries__map">
                <img src={Map} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCountries;