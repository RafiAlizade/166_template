import {useEffect, useState} from 'react'
import PageHeader from "./../OurCompanyHeader/OurCompanyHeader";
import woman1 from './../../assets/images/ourteam/woman-1.svg'
import woman2 from './../../assets/images/ourteam/woman-2.svg'
import man1 from './../../assets/images/ourteam/man-1.svg'
import './OurTeam.css'
import NavigateComp from './../NavigateComp/NavigateComp';
import axios from 'axios';



function OurTeam() {

  const [members , setMembers] = useState([])

  useEffect(() => {
    const getMembers = async () => {
        const resp = await axios.get('http://localhost:3000/teamMembers')
        setMembers(resp.data)
    }

    getMembers()
}, [])

  
  return (
    <section className="ourteam__main">
      <div className="container">
      <NavigateComp 
        Parent="Şirkətimiz" 
        Child="Komandamımız" 
      />
      <PageHeader />
    <div className="ourteam__inner">
        <div className="ourteam__top">
          <div className="ourteam__line">

          </div>

          <h5 className="ourteam__label">
            Komandamız
          </h5>
        </div>

        <div className="ourteam__bottom">
          <div className="ourteam__members">
            {members.map((member, index) => (
              <div className="ourteam__members_item" key={index}>
                  <div className="ourteam__members_img">
                    <img src={member.image} alt="" />
                  </div>

                  <div className="ourteam__members_labels">
                    <h6 className="ourteam__members_name">
                      {member.name}
                    </h6>

                    <span className="ourteam__members_job">
                        {member.job}
                    </span>
                  </div>
              </div>
            ))}
          </div>
        </div>
    </div>
      </div>
    </section>
  )
}

export default OurTeam