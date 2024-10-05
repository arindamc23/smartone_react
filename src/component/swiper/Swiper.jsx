// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import immigration from '../../assets/images/slider1.png'
import immigration2 from '../../assets/images/slider2.png'
import immigration3 from '../../assets/images/slider3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from './swiper.module.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardLink,
  MDBIcon
} from 'mdb-react-ui-kit';

// import required modules
import { Keyboard, Scrollbar } from "swiper";
import React from 'react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        769: {
          slidesPerView: 3.5,
          slidesPerGroup: 2,
        },
      }}
      scrollbar={true}
      // navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Scrollbar]}
      className="mySwiper"
    >
     
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"New Tax Law Changes That Could Affect Your Business in 2023"</MDBCardTitle>
              <MDBCardText> This article could discuss recent changes to tax laws and regulations that businesses should be aware of in the upcoming year.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration2} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"Trademark Protection: Why It's Essential for Your Branding Strategy"</MDBCardTitle>
              <MDBCardText> Explore the advantages of working with a professional design team to develop a powerful visual identity and branding strategy that drives business results.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration3} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"Navigating Complex Employment Immigration Regulations: What You Need to Know"</MDBCardTitle>
              <MDBCardText> An overview of the latest employment immigration regulations and how businesses can ensure compliance while attracting top talent.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"New Tax Law Changes That Could Affect Your Business in 2023"</MDBCardTitle>
              <MDBCardText> This article could discuss recent changes to tax laws and regulations that businesses should be aware of in the upcoming year.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration2} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"New Tax Law Changes That Could Affect Your Business in 2023"</MDBCardTitle>
              <MDBCardText> This article could discuss recent changes to tax laws and regulations that businesses should be aware of in the upcoming year.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard className={Style.SwiperCard}>
            <MDBCardImage src={immigration3} alt="design" fluid />
            <MDBCardBody className={Style.SwiperBody}>
              <MDBCardTitle>"Trademark Protection: Why It's Essential for Your Branding Strategy"</MDBCardTitle>
              <MDBCardText> Explore the advantages of working with a professional design team to develop a powerful visual identity and branding strategy that drives business results.
              </MDBCardText>
              <MDBCardLink href='#'>Read More <MDBIcon fas icon="arrow-right" className="ms-1"/></MDBCardLink>
            </MDBCardBody>
          </MDBCard>
        </SwiperSlide>
    </Swiper>
  );
};