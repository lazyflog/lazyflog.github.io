import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree /* resume */ } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    '어릴때 부터 컴퓨터를 이용해서 무엇인가를 하는것을 좋아했습니다. 그래서 중학생때 부터 조금씩 C언어를 배우기 시작하였고, 그 기세를 이어가 대학교도 컴퓨터 관련 학과로 가게 되었습니다.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '그렇게 가게된 대학교에서 데이터베이스와 c, java, html등을 배우게 되면서 개발에 흥미를 가지기 시작했고 더욱 파고들어가 캡스톤 디자인 과목에서 날씨어플을 만들어보면서 재밌다고 느꼈고, 그렇게 진로를 개발자로 결정했습니다.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    '제 목표는 제 가치를 계속해서 키워나가는 "눈덩이" 같은 개발자가 되는것입니다.'}
                </p>
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
