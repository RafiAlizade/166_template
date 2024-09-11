import {useState} from "react";
import { ChevronDown, Telephone } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import "./ServicesPage.css";
import banner from './../../assets/images/transport/banner.svg'

function ServicesPage() {
  const servicesMenu = [
    {
      id: 1,
      title: "Transport",
      subItems: [],
      url: "/services",
    },
    {
      id: 2,
      title: "Logistika",
      subItems: [],
      url: "/logistics",
    },
    {
      id: 3,
      title: "Yük Gönderimi",
      subItems: [],
      url: "/cargo-shipping",
    },
    {
      id: 4,
      title: "Xalçayuma",
      subItems: [
        {
          id: 5,
          title: "Ev heyvanlarının və digər qoxuların aradan qaldırılması",
          url: "/animal-and-other-shipments",
        },
        {
          id: 6,
          title: "Korporativ xidmət",
          url: "/corporate-services",
        },
        {
          id: 7,
          title: "Sintefon yorğan, yastıq və örtüklərin yuyulması",
          url: "/order-fulfillment",
        },
      ],
      url: "/bulk-shipping",
    },
    {
      id: 8,
      title: "Təmizlik xidməti",
      subItems: [
        {
          id: 9,
          title: "Əlavə təmizlik xidməti",
          url: "/additional-cleaning-services",
        },
      ],
      url: "/cleaning-services",
    },
    {
      id: 10,
      title: "Evakuasiya",
      subItems: [],
      url: "/evacuation-services",
    },
    {
      id: 11,
      title: "Anbar xidməti",
      subItems: [],
      url: "/storage-services",
    },
    {
      id: 12,
      title: "İçi qiyməsi xidməti",
      subItems: [],
      url: "/valuation-services",
    },
    {
      id: 13,
      title: "Usta xidməti",
      subItems: [],
      url: "/repair-services",
    },
    {
      id: 14,
      title: "Texnoloji həllər",
      subItems: [],
      url: "/tech-solutions",
    },
    {
      id: 15,
      title: "HVAC",
      subItems: [],
      url: "/hvac-services",
    },
    {
      id: 16,
      title: "Sanitariya xidməti",
      subItems: [],
      url: "/sanitary-services",
    },
    {
      id: 17,
      title: "Kargo xidməti",
      subItems: [],
      url: "/freight-services",
    },
  ];

  const features = [
    { name: "WI-FI sisteminin olması" },
    { name: "Powerbankların olması" },
    { name: "Sürət həddinə xüsusi nəzarət (GPS)" },
    { name: "18-20 nəfərlik olması" },
    { name: "Yumşaq və komfortlu oturacaq" },
    { name: "Kondisioner və monitor" },
    { name: "Masa və işıqlı salon" },
    { name: "Mütəmadi təmizlənən salon" },
    { name: "Baqqaj" },
    { name: "Peşəkar sürücü həyatı" }
  ];

  const usageReasons = [
    { label: "Şəhərdaxili sərnişin daşınması" },
    { label: "Ailəvi, dostlarla və ya iş yoldaşlarınızla birgə istirahət üçün" },
    { label: "Toy, yas və digər mərasimlər üçün" },
    { label: "Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi heyətinin daşınması)" },
    { label: "Hava limanından turistlərin istənilən ünvana çatdırılması" },
    { label: "Həftəci şirkət işçilərinin daşınması" },
    { label: "Məktəblilərin və universitet tələbələrinin daşınması" },
    { label: "Müalicə məqsədilə bölgələrimizə səyahət edən şəxslər" },
    { label: "Ölkənin dörd bir yanına səfər təşkil edən tur agentləri" },
    { label: "Zavod, fabrik, bank işçilərinin istirahət və ya iş məqsədilə daşınması" },
    { label: "Özəl səfərlər üçün sürücü və nəqliyyat vasitəsinin icarəsi" }
  ];
  

  const [openMenu, setOpenMenu] = useState({});

  const toggleSubMenu = (id, hasSubItems, event) => {
    if (hasSubItems) {
      event.preventDefault();
      event.stopPropagation(); 
      setOpenMenu(prevState => ({
        ...prevState,
        [id]: !prevState[id]  
      }));
    }
  };

  return (
    <section className="services__main">
      <div className="container">
        <div className="services__inner">
          <aside className="services__aside">
            <div className="services__aside_container">
              {servicesMenu.map((item, index) => (
                <>
                  <NavLink
                    to={item.url}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    key={index}
                    onClick={(e) => toggleSubMenu(item.id, item.subItems.length > 0, e)}
                  >
                    {item.title}
                    {item.subItems && item.subItems.length > 0 && (
                    <ChevronDown 
                    className={openMenu[item.id] ? "icon-rotate" : ""}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      e.preventDefault(); 
                      toggleSubMenu(item.id);
                    }} 
                  />
                  )}
                  </NavLink>
                  {openMenu[item.id] && (
                    <div className="services__submenu_container">
                      {item.subItems.map(sub => (
                        <NavLink to={sub.url} key={sub.id} className="submenu-link">
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </div>
          </aside>
          <div className="services__description">
            <div className="services__description_top">
                <div className="services__description__top_left">
                        <h5 className="services__description__top_label">
                        Transport
                        </h5>

                        <div className="services__description__top_order">
                            <Link to='/order' className="services__description__top_ordernow">Sifariş ver</Link>
                            <Link to='tel:166' className="services__description__top_call"><Telephone /> 166</Link>
                        </div>

                        <span className="description__top_text">
                        Turizm, iş və digər sahələrdə ən rahat, müasir standartlara uyğun və operativ sərnişin daşınma xidmətini 166 Transport təklif edir. <br />
166 Transport xidməti hazırda ölkənin Sprinter icarəsi və turların təşkili üzrə ən qabaqcıl xidmətlərindən biridir. <br />
Peşəkar sürücülərimiz tərəfindən sərnişinlərin bir ünvandan digər ünvana təhlükəsiz daşınmasını təmin edirik.

                        </span>
                </div>

                <div className="services__description__top_right">
                        <div className="services__description__top_img">
                            <img src={banner} alt="" />
                        </div>
                    </div>
            </div>

            <div className="services__description_mid">
                <h5 className="services__description__mid_label">
                    Sprinterlərimizin üstünlük və özəllikləri
                </h5>

                <div className="services__description__mid_container">
                    {features.map((feature, index) => (
                        <div className="services__description__mid_item" key={index}>
                            <span>{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="services__description_bottom">
                    <h5 className="services__description__bottom_label">
                    Sprinterlərdən nə üçün istifadə etmək olar?
                    </h5>

                    <div className="services__description__bottom_container">
                        <ul className="services__description__bottom_list">
                        {usageReasons.map((reason, index) => (
                            <li className="services__description__bottom_item" key={index}>{reason.label}</li>
                        ))}
                        </ul>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ServicesPage;