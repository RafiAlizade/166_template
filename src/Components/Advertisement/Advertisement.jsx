import React from 'react'
import { Telephone } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './Advertisement.css'

function Advertisement() {
  return (
    <div className="main__advertisement">
        <div className="container">
            <div className="advertisement__inner">
               <div className="advertisement__post">
               <div className="advertisement__top">
                        <span className="advertisement__enddate">
                            03.08.25 - qdr
                        </span>
                </div>

                <div className="adveritsement__bottom">
                        <h5 className="advertisement__label">
                        20%-Lorem ipsum dolor sit amet
                        </h5>

                        <div className="advertisement__bottom_desc">
                            <span>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</span>
                            <Link to='tel:166' className='advertisement__bottom_link'><Telephone /> 166</Link>
                        </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Advertisement