import React from 'react'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Home.css'


export default function Home() {
  return (
    
    <div className='home'>
        <div className="swiper-wrapper">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1} //한화면 몇장표시
                slidesPerGroup={1} //한번 이동시 갯수
                pagination={{ clickable: true }} //하단 페이저 점클릭 가능
                autoplay={{
                    //자동슬라이드
                delay: 3000,
                disableOnInteraction: false,
                }}
            >
            <SwiperSlide>
                <img src="/images/s1.jpg" alt="Slide 1" />
                <h1>고양이 좋아</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/s2.jpg" alt="Slide 2" />
                <h1>고양이 귀여워</h1>
                </SwiperSlide>
            <SwiperSlide>
                <img src="/images/s3.jpg" alt="Slide 3" />
                <h1>고양이 복실복실</h1>
                </SwiperSlide>
            </Swiper>
         </div>   

        <h1>홈 페이지</h1>
        <p>React Router를 사용한 다중 페이지 애플리케이션에 오신 것을 환영합니다!</p>

        <div className="feature-cards">
            <div className="card">
                <h3>빠른 탐색</h3>
                <p>React Router로 매끄러운 페이지 이동을 경험하세요.</p>
            </div>
            <div className="card">
                <h3>SEO 친화적</h3>
                <p>각 페이지에 고유한 URL을 제공합니다.</p>
            </div>
            <div className="card">
                <h3>사용자 경험</h3>
                <p>전환 없이 빠른 페이지 이동을 제공합니다.</p>
            </div>
        </div>
        <div className="cta-section">
            <Link to='/product' className='cta-button'>
             상품보기
            </Link>
        </div>
    </div>
  )
}
