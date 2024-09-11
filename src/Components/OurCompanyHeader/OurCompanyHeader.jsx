import './OurCompanyHeader.css'
import { NavLink } from 'react-router-dom'

function OurCompanyHeader() {
  const headerLinks = [
    {
      label: "Haqqımızda",
      url: "/aboutus"
    },
    {
      label: "Komandamız",
      url: "/team"
    },
    {
      label: "Mediada biz",
      url: "/media"
    },
    {
      label: "Blog",
      url: "/blog"
    },
    {
      label: "Tez-tez verilən suallar",
      url: "/faq"
    },
    {
      label: "Qalereya",
      url: "/gallery"
    }
  ];

  return (
    <div className="companyheader__navigation">
      <nav className="companyheader__links">
          {headerLinks.map((link, index) => (
            <NavLink to={link.url} key={index}>{link.label}</NavLink>
          ))}
      </nav>
    </div>
  )
}

export default OurCompanyHeader