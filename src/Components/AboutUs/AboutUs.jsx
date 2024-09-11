import { useState } from "react";
import PageHeader from "./../OurCompanyHeader/OurCompanyHeader";
import aboutUsImage from "./../../assets/images/aboutus/image.svg";
import { Clock, Tag, Gear, Truck } from "react-bootstrap-icons";
import CommentsBox from './../CommentsBox/CommentsBox'
import "./AboutUs.css";
import Slider from "react-slick";
import NavigateComp from './../NavigateComp/NavigateComp';

function AboutUs() {
  const [selectedStep, setSelectedStep] = useState(1);

  const missionData = [
    {
      count: "526368+",
      label: "Daşınmış ofis və ev",
    },
    {
      count: "2365+",
      label: "Təmizlik edilmiş məkan",
    },
    {
      count: "327166+",
      label: "Müştəri rəyləri",
    },
    {
      count: "304264+",
      label: "Məmnun qalan müştərilər",
    },
  ];

  const missionFeatures = [
    {
      label: "Sürətli xidmət",
      icon: Clock,
    },
    {
      label: "Sərfəli qiymət",
      icon: Tag,
    },
    {
      label: "Kompleks həllər",
      icon: Gear,
    },
    {
      label: "Nəqliyyat infrastrukturunun inkişafı",
      icon: Truck,
    },
  ];

  const missionSteps = [
    {
      number: 1,
      title: "166-ya zəng etməklə sifariş verirsiniz",
      description:
        "Birbaşa 166-ya zəng edə və ya sayt vasitəsilə 'Sizə zəng' formundan istifadə edə bilərsiniz.",
    },
    {
      number: 2,
      title: "Operatorlarımız sifarişlərinizi qəbul edir",
      description:
        "Operatorumuz sizə xidmətlə bağlı məlumatlar verir, ödəniş üsulu və şərtlər barədə məlumatlandırır.",
    },
    {
      number: 3,
      title: "Əməkdaşlarımız sifarişçi yerinə yetirir",
      description:
        "Əməkdaşlarımız təyin olunan ünvanda sizə lazım olan xidməti təqdim edir.",
    },
    {
      number: 4,
      title: "Sifariş tamamlanır",
      description:
        "Təyin olunan xidmət üzrə əməkdaşlarımız sifarişinizi tamamlamaq üçün hər şeyi hazırlar.",
    },
    {
      number: 5,
      title: "Xidmət bitdikdən sonra siz ödəniş edirsiniz",
      description:
        "Ödəniş imkanlarını sizə təqdim edirik; həm nağd, həm də kartla.",
    },
    {
      number: 6,
      title: "Göstərdiyimiz xidmətin keyfiyyəti ölçülür",
      description:
        "Xidmətdən məmnunluğunuzu ölçürük və sizinlə əlaqə saxlayırıq.",
    },
  ];

  return (
    <section className="aboutus__main">
      <div className="container">
      <NavigateComp 
        Parent="Şirkətimiz" 
        Child="Haqqımızda" 
      />
        <PageHeader />
        <div className="aboutus__inner">
          <div className="aboutus__info">
            <div className="aboutus__info_left">
              <div className="aboutus__info_left_labels">
                <div className="aboutus__info_line"></div>

                <h5 className="aboutu__info_left_label">Haqqımızda</h5>
              </div>

              <span className="aboutus__info_left_italic">
                 “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”
              </span>

              <div className="aboutus__info_left_img">
                <img src={aboutUsImage} alt="" />
              </div>
            </div>

            <div className="aboutus__info__right">
              <span className="aboutus__info_right_desc">
                2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan
                “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi
                üzrə ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması
                yalnız ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq
                arenada da həyata keçirilir.Daim müştərilərimizin xidmətində
                olmaq və operativ xidmət göstərmək məqsədilə 166 qaynar xəttimiz
                7/24 ölkənin istənilən nöqtəsindən zəngləri qəbul edir.
                Göstərdiyimiz xidmətin müştərilərimizə rahat və əlçatan olması
                məqsədilə xidmət sahələrimiz genişlənməyə davam edir. Şirkətimiz
                yükdaşıma sahəsi ilə fəaliyyətə başlasa da, hazırda müxtəlif
                kompleks xidmətləri – yükdaşıma ve logistika, evakuasiya, işçi
                qüvvəsi, usta xidməti, anbar xidməti, təmizlik xidməti və xalça
                yuma xidmətlərini müştərilərinə təqdim edib.Xidmətlərimizin daha
                əlçatan olması üçün sərfəli qiymət və hər bir bölgəyə xidmət
                anlayışları ilə çalışırıq.  166 brendi altında fəaliyyət
                göstərən hər bir xidmətin keyfiyyətinin ölçülməsi bizim üçün
                olduqca vacibdir. Bu məqsədlə, mütəmadi olaraq müştərilərimizin
                göstərilən xidmətlər üzrə fikirlərini öyrənir, təklif və
                iradlarına əsasən xidmət keyfiyyətini daim təkmilləşdiririk.
                (ISO 9001:2015 - Keyfiyyət İdarəetmə Sistemi, ISO 45001:2018 -
                Peşə Sağlamlığı və Əməyin Təhlükəsizliyi İdarəetmə Sistemi və
                ISO 14001:2015 - Ətraf Mühitin İdarəetmə sistemi üzrə beynəlxalq
                sertifikatları)
              </span>
            </div>
          </div>

          <div className="aboutus__mission">
            <div className="aboutus__mission_left">
              <div className="aboutus__mission_total">
                {missionData.map((item, index) => (
                  <div className="aboutus__mission__total_item" key={index}>
                    <span className="aboutus__mission__total_count">
                      {item.count}
                    </span>

                    <span className="aboutus__mission__total_label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aboutus__mission__right">
              <div className="aboutus__mission_head">
                <div className="aboutus__info_line"></div>

                <h5 className="aboutus__mission_label">Missiyamız</h5>
              </div>

              <span className="aboutus__mission_right_desc">
                Missiyamız, müştərilərimizi və partnyorlarımızı dərindən
                anlamaq, onlara effektiv logistik həlləri yüksək keyfiyyətdə
                təqdim etmək və eyni zamanda əməkdaşlarımızın şəxsi inkişafı və
                motivasiyasını üst səviyyədə tutmaqdır.
              </span>

              <div className="aboutus__mission_features">
                {missionFeatures.map((feature, index) => (
                  <div className="aboutus__mission_features_item" key={index}>
                    <div className="aboutus__mission_features_icon">
                      <feature.icon />
                    </div>

                    <span className="aboutus__mission_features_label">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aboutus_howwork">
            <div className="aboutus__howwork_top">
            <div className="aboutus__info_line"></div>

<h5 className="aboutus__howwork_label">Biz necə işləyirik?</h5>
            </div>

            <div className="aboutus__howwork_bottom">
              <div className="aboutus__howwork_bottom_container">
                {missionSteps.map((step, index) => (
                  <div
                    className={`aboutus__howwork_item ${
                      selectedStep === step.number ? "selected" : ""
                    } ${index % 2 === 0 ? "even" : "odd"}`}
                    key={index}
                    onClick={() => setSelectedStep(step.number)}
                  >
                    <div className="aboutus__howwork_item_box">
                      <div className="aboutus__howwork_item_number">
                        {step.number}
                      </div>
                      <h6 className="aboutus__howwork_item_label">
                        {step.title}
                      </h6>

                      <span className="aboutus__howwork_item_desc">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aboutus__comments">
          <div className="aboutus__comments_top">
            <div className="aboutus__info_line"></div>

            <h5 className="aboutus__comments_label">Müştəri rəyləri?</h5>
            </div>

            <div className="aboutus__comments_bottom">
                  <CommentsBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
