import React from 'react'
import './TotalExperience.css'

function TotalExperience() {
    const experienceData = [
        {
            name: "Total orders",
            count: 25
        },
        {
            name: "Total visit",
            count: "105K"
        },
        {
            name: "Service countries",
            count: 20
        }
    ]

  return (
    <section className="main__texperience">
        <div className="container">
            <div className="texperience__inner">
                <div className="texperience__top">
                    <div className="texperience__top_left">
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                    </div>

                    <div className="texperience__top_right">
                            <span>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World</span>
                        </div>
                </div>

                <div className="texperience__bottom">
                    {experienceData.map((data,index) => (
                        <div className="texperience__box" key={index}> 
                            <h5 className="texperience__count">
                                {data.count} <span>+</span>
                            </h5>

                            <span className="texperience__title">
                                {data.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalExperience