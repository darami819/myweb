import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselEx = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/0.jpg"
          alt="First slide"      
        />
        <Carousel.Caption>
          <h3>내 이름은 김서연. 대학생이죠.</h3>
          <p>보시는(?) 것처럼 여자구요. 2022에서 20 빼면 그때 태어났구요.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/1.jpg"
          alt="Second slide"         
        />
        <Carousel.Caption>
          <h3>생일은?</h3>
          <p>8월 19일이랍니다~ 8+1=9니까 금방 외우실 수 있구요(암기라이팅).</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>6시 내고향은 어딜까요</h3>
          <p>
            저는 인천 사람이에요.. 그치만 이제 인천은 잘 가지도 않는
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/4.jpg"
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>흔해 빠진 MBTI가 빠질 수 없죠</h3>
          <p>전 IJ는 거의 고정인 INTJ랍니다 혈액형은? 인형</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>사실 B형이고요</h3>
          <p>
            TMI website에 오신 걸 환영해요! 저에 대해 알아가실수록 제가 더 좋아지실 거예요.
            죄송하지만 출구는 없으니 파이팅 하세요!
          </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default CarouselEx;