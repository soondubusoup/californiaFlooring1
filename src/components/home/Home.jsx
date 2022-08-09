import React from "react";
import "./Home.css";
import { VideoDiv, VidWrap, StyledVideo, StyledServiceButton, StyledQuoteButton, HeaderStuff } from "../../utils/styles";
import { Container, Button } from "semantic-ui-react";

import flooring from "../../assets/flooring.mp4";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">California Flooring</h1>
      <VideoDiv>
        <VidWrap>
          <StyledVideo autoPlay loop muted>
            <source src={flooring} type="video/mp4" />
          </StyledVideo>
        </VidWrap>
        <HeaderStuff>
          <Container textAlign="center">
          <StyledServiceButton
              animated="fade"
              size="huge"
              // href="https://chrome.google.com/webstore/detail/job-saver/hklmnkhdlflnbnadkalnobiollacjcaa"
            >
              <Button.Content visible>Services</Button.Content>
            </StyledServiceButton>
            <StyledQuoteButton
              animated="fade"
              size="huge"
              // href="https://chrome.google.com/webstore/detail/job-saver/hklmnkhdlflnbnadkalnobiollacjcaa"
            >
              <Button.Content visible>Get A Quote</Button.Content>
            </StyledQuoteButton>
          </Container>
        </HeaderStuff>
      </VideoDiv>
      <div className="middle">
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum</p>
      </div>
      <footer>
        Lorem Ipsum, Oakland CA
      </footer>
    </div>
  );
};

export default Home;
