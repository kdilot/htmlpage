/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

function App() {
  return (
    <section id="wrapper">
      <header id="header">
        <div className="wrap-contents">
          <h1 className="logo">
            <a href="#">tliz</a>
          </h1>
          <nav id="gnb" className="">
            <a href="#" className="btn-menu" id="btnMenu">
              <span>mobile menu button</span>
            </a>
            <div className="gnb-list">
              <ul>
                <li>
                  <a href="about.html">ABOUT</a>
                </li>
                <li className="active">
                  <a href="service.html">SERVICE</a>
                </li>

                <li>
                  <a href="portfolio.html">PORTFOLIO</a>
                </li>
                <li>
                  <a href="request.html">REQUEST</a>
                </li>
              </ul>
              <p className="copy">© 2020 TRIZ. All Rights Reserved.</p>
            </div>
          </nav>
        </div>
      </header>
      <div id="container">
        <div className="main-visual">
          <div className="wrap-contents">
            <h2 className="tit">
              고객 가치를 우선하는 <span>크리에이티브 그룹</span>
            </h2>
            <p className="desc">테스트 테스트용 부제목 테스트 영역입니다.</p>
          </div>
        </div>
        <div className="comp-intro">
          <div className="wrap-contents">
            <ul>
              <li className="cont">
                <div className="pic"></div>
                <div className="info">
                  <div className="inner">
                    <span className="num">01</span>
                    <h3 className="tit">영상 컨텐츠 제작</h3>
                    <p className="desc">
                      포토,브랜디드 컨텐츠, 캠페인 영상까지
                      <span>
                        디지털 기반의 통합 마케팅 솔루션을 제공합니다.
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="social">
                <div className="pic"></div>
                <div className="info">
                  <div className="inner">
                    <span className="num">02</span>
                    <h3 className="tit">소셜 미디어 운영</h3>
                    <p className="desc">
                      페이스북, 인스타그램, 블로그 등 SNS를 통한
                      <span>유저들과의 긴밀한 소통 채널을 운영합니다.</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="comp-intor-project">
          <div className="wrap-contents">
            <h3 className="tit">
              트리즈 스튜디오가 <span>함께 만들어갑니다</span>
            </h3>
            <p className="desc">지금 바로 프로젝트를 문의해보세요</p>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="wrap-contents">
          <span className="logo">
            <a href="#">tilz</a>
          </span>
          <p className="copy">© 2020 TRIZ. All Rights Reserved.</p>
          <div className="address">
            <ul>
              <li className="addr">
                서울특별시 서초구 강남대로 369 에이플러스 에셋 7F
              </li>
              <li className="tel">
                <a href="#">02-6959-3306</a>
              </li>
              <li className="email">
                <a href="#">contact@triz.co.kr</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <a href="#" className="btn-contact">
        <span>문의</span>
      </a>
    </section>
  );
}

export default App;
